import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const FALLBACK_EMAIL = "sales@ceclphotonics.com";
const PERSONAL_EMAIL_DOMAINS = new Set([
  "126.com", "163.com", "aol.com", "gmail.com", "googlemail.com", "hotmail.com",
  "icloud.com", "live.com", "mail.com", "outlook.com", "proton.me", "protonmail.com",
  "qq.com", "yahoo.com", "yahoo.co.uk", "yandex.com",
]);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const attempts = new Map<string, number[]>();

type Payload = Record<string, unknown>;

function text(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isBusinessEmail(email: string) {
  return !PERSONAL_EMAIL_DOMAINS.has(email.split("@").at(-1)?.toLowerCase() || "");
}

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")?.trim()
    || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((value) => now - value < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 5000) {
    for (const [key, values] of attempts) {
      if (!values.some((value) => now - value < RATE_LIMIT_WINDOW_MS)) attempts.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

async function archive(record: Record<string, string | boolean>) {
  const line = JSON.stringify(record);
  const logPath = process.env.INQUIRY_LOG_PATH;
  if (!logPath) return false;
  try {
    await mkdir(dirname(logPath), { recursive: true });
    await appendFile(logPath, `${line}\n`, "utf8");
    return true;
  } catch (error) {
    console.error("[inquiry] could not append persistent record", error);
    return false;
  }
}

function failure(status: number, error: string, errors?: string[]) {
  return NextResponse.json(
    { ok: false, accepted: false, error, errors, fallbackEmail: FALLBACK_EMAIL },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return failure(429, "Too many inquiry attempts. Please wait a few minutes or email us directly.");
  }
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 25_000) return failure(413, "The inquiry is too large. Please email us instead.");

  let body: Payload;
  try {
    body = await request.json() as Payload;
  } catch {
    return failure(400, "The inquiry data could not be read.", ["Invalid request body."]);
  }

  const name = text(body.name, 120);
  const email = text(body.email, 200).toLowerCase();
  const company = text(body.company, 180);
  const projectType = text(body.type, 180);
  const requirements = text(body.requirements, 6000);
  const honeypot = text(body._honey, 200);
  const startedAt = Number(body._started_at || 0);
  const errors: string[] = [];

  if (honeypot) return failure(400, "The inquiry could not be processed.");
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < 1800 || Date.now() - startedAt > 86_400_000) {
    return failure(400, "The inquiry could not be processed. Please reload the page and try again.");
  }
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  else if (!isValidEmail(email)) errors.push("Please use a valid email address.");
  if (!company) errors.push("Company is required.");
  if (!projectType) errors.push("Product or service requirement is required.");
  if (!requirements) errors.push("Project requirements are required.");
  if (text(body.privacy_consent, 40) !== "Accepted") errors.push("Privacy consent is required.");
  if (errors.length) return failure(422, "Please review the inquiry details.", errors);

  const submittedAt = new Date().toISOString();
  const inquiryId = `CECL-${submittedAt.slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const businessEmail = isBusinessEmail(email);
  const record = {
    inquiryId,
    submittedAt,
    spamFlag: false,
    name,
    email,
    emailType: businessEmail ? "business" : "personal",
    leadPriority: businessEmail ? "standard" : "review",
    company,
    phone: text(body.phone, 80),
    projectType,
    targetMarket: text(body.market, 180),
    requirements,
    language: text(body.language, 20) || "unknown",
    sourcePage: text(body.source_page, 1000),
    referrer: text(body.referrer, 1000),
  };

  const persisted = await archive(record);
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, INQUIRY_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(`[inquiry] ${inquiryId} archived=${persisted}, but Hostinger SMTP is not configured`);
    return failure(503, "Our email service is temporarily unavailable. Please email us directly.");
  }

  const message = [
    `Inquiry ID:       ${inquiryId}`,
    `Submitted (UTC):  ${submittedAt}`,
    `Name:             ${record.name}`,
    `Email:            ${record.email}`,
    `Email type:       ${record.emailType}`,
    `Lead priority:    ${record.leadPriority}`,
    `Company:          ${record.company}`,
    `Phone / WhatsApp: ${record.phone || "—"}`,
    `Product/service:  ${record.projectType}`,
    `Target market:    ${record.targetMarket || "—"}`,
    `Language:         ${record.language}`,
    `Source page:      ${record.sourcePage || "—"}`,
    `Referrer:         ${record.referrer || "—"}`,
    "",
    "Requirements:",
    record.requirements,
  ].join("\n");

  try {
    const port = Number(SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    const info = await transporter.sendMail({
      from: `CECL Photonics RFQ <${SMTP_USER}>`,
      to: INQUIRY_TO || FALLBACK_EMAIL,
      replyTo: record.email,
      subject: `[CECL RFQ][${businessEmail ? "STANDARD" : "REVIEW"}] ${record.company} · ${record.projectType}`,
      text: message,
    });

    if (!info.accepted.length) {
      console.error(`[inquiry] ${inquiryId} SMTP returned no accepted recipients; rejected=[${info.rejected.join(", ")}] response=${info.response}`);
      return failure(502, "The email service did not accept this inquiry. Please retry or email us directly.");
    }

    console.info(`[inquiry] ${inquiryId} accepted by Hostinger SMTP; accepted=[${info.accepted.join(", ")}] archived=${persisted}`);
    return NextResponse.json(
      { ok: true, accepted: true, inquiryId, messageId: info.messageId, archived: persisted },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    const smtpError = error as { code?: string; responseCode?: number; message?: string };
    console.error(`[inquiry] ${inquiryId} Hostinger SMTP failed code=${smtpError.code || "?"} responseCode=${smtpError.responseCode || "?"} message=${smtpError.message || "unknown"}`);
    return failure(502, "The email service could not be reached. Please retry or email us directly.");
  }
}
