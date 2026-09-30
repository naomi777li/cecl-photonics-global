import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const FALLBACK_EMAIL = "info@ceclphotonics.com";
const PERSONAL_EMAIL_DOMAINS = new Set([
  "126.com", "163.com", "aol.com", "gmail.com", "googlemail.com", "hotmail.com",
  "icloud.com", "live.com", "mail.com", "outlook.com", "proton.me", "protonmail.com",
  "qq.com", "yahoo.com", "yahoo.co.uk", "yandex.com",
]);

type Payload = Record<string, unknown>;

function text(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isBusinessEmail(email: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  return !PERSONAL_EMAIL_DOMAINS.has(email.split("@").at(-1)?.toLowerCase() || "");
}

async function archive(record: Record<string, string | boolean>) {
  const line = JSON.stringify(record);
  console.info(`[inquiry-record] ${line}`);
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
    { status },
  );
}

export async function POST(request: Request) {
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
  const errors: string[] = [];

  if (honeypot) return failure(400, "The inquiry could not be processed.");
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Work email is required.");
  else if (!isBusinessEmail(email)) errors.push("Please use a valid work email address.");
  if (!company) errors.push("Company is required.");
  if (!projectType) errors.push("Product or service requirement is required.");
  if (!requirements) errors.push("Project requirements are required.");
  if (text(body.privacy_consent, 40) !== "Accepted") errors.push("Privacy consent is required.");
  if (errors.length) return failure(422, "Please review the inquiry details.", errors);

  const submittedAt = new Date().toISOString();
  const inquiryId = `CECL-${submittedAt.slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const record = {
    inquiryId,
    submittedAt,
    spamFlag: false,
    name,
    email,
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
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RFQ_TO_EMAIL || FALLBACK_EMAIL;
  const from = process.env.RFQ_FROM_EMAIL || "rfq@ceclphotonics.com";
  if (!apiKey) {
    console.error(`[inquiry] ${inquiryId} archived=${persisted}, but RESEND_API_KEY is not configured`);
    return failure(503, "Our email service is temporarily unavailable. Please email us directly.");
  }

  const message = [
    `Inquiry ID:       ${inquiryId}`,
    `Submitted (UTC):  ${submittedAt}`,
    `Name:             ${record.name}`,
    `Work email:       ${record.email}`,
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
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: `CECL Photonics RFQ <${from}>`,
      to: [to],
      replyTo: record.email,
      subject: `[CECL RFQ] ${record.company} · ${record.projectType}`,
      text: message,
      tags: [
        { name: "category", value: "website_rfq" },
        { name: "language", value: record.language.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 50) || "unknown" },
      ],
    });

    if (error || !data?.id) {
      console.error(`[inquiry] ${inquiryId} Resend rejected request: ${error?.name || "UNKNOWN"} ${error?.message || "No email ID returned"}`);
      return failure(502, "The email service did not accept this inquiry. Please retry or email us directly.");
    }

    console.info(`[inquiry] ${inquiryId} accepted by Resend as ${data.id}; archived=${persisted}`);
    return NextResponse.json({ ok: true, accepted: true, inquiryId, messageId: data.id, archived: persisted });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Resend error";
    console.error(`[inquiry] ${inquiryId} Resend request failed: ${message}`);
    return failure(502, "The email service could not be reached. Please retry or email us directly.");
  }
}
