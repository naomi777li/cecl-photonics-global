import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

function text(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
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

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json() as Payload;
  } catch {
    return NextResponse.json({ ok: false, errors: ["Invalid request body."] }, { status: 400 });
  }

  const email = text(body.email, 200);
  const errors: string[] = [];
  if (!email) errors.push("Business email is required.");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Business email format looks wrong.");
  if (errors.length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const submittedAt = new Date().toISOString();
  const inquiryId = `CECL-${submittedAt.slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const honeypot = Boolean(text(body._honey, 200));
  const record = {
    inquiryId,
    submittedAt,
    spamFlag: honeypot,
    name: text(body.name, 200),
    email,
    company: text(body.company, 200),
    phone: text(body.phone, 200),
    projectType: text(body.type, 200),
    targetMarket: text(body.market, 200),
    requirements: text(body.requirements),
    language: text(body.language, 20) || "unknown",
    sourcePage: text(body.source_page, 1000),
    referrer: text(body.referrer, 1000),
  };

  // Silently accept honeypot submissions so automated senders cannot learn
  // which field triggered the filter, while keeping spam out of mail and logs.
  if (honeypot) {
    return NextResponse.json({ ok: true, delivered: true, archived: false, inquiryId });
  }
  const persisted = await archive(record);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, INQUIRY_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(`[inquiry] ${inquiryId} archived but SMTP is not configured`);
    return NextResponse.json({ ok: true, delivered: false, archived: persisted, inquiryId });
  }

  const message = [
    `Inquiry ID:       ${inquiryId}`,
    `Submitted (UTC):  ${submittedAt}`,
    `Name:             ${record.name || "—"}`,
    `Business email:   ${email}`,
    `Company:          ${record.company || "—"}`,
    `Phone / WhatsApp: ${record.phone || "—"}`,
    `Project type:     ${record.projectType || "—"}`,
    `Target market:    ${record.targetMarket || "—"}`,
    `Language:         ${record.language}`,
    `Source page:      ${record.sourcePage || "—"}`,
    `Referrer:         ${record.referrer || "—"}`,
    "",
    "Requirements:",
    record.requirements || "—",
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
      from: `"CECL Photonics website" <${SMTP_USER}>`,
      to: INQUIRY_TO || "sales@ceclphotonics.com",
      replyTo: email,
      subject: `${honeypot ? "[SPAM?] " : ""}[CECL inquiry] ${record.company || email} · ${record.projectType || "B2B project"}`,
      text: message,
    });
    const delivered = info.accepted.length > 0;
    console.info(`[inquiry] ${inquiryId} SMTP accepted=[${info.accepted.join(", ")}] rejected=[${info.rejected.join(", ")}] response=${info.response}`);
    return NextResponse.json({ ok: true, delivered, archived: persisted, inquiryId });
  } catch (error) {
    const smtpError = error as { code?: string; responseCode?: number; message?: string };
    console.error(`[inquiry] ${inquiryId} SMTP failed code=${smtpError.code || "?"} responseCode=${smtpError.responseCode || "?"} message=${smtpError.message || "unknown"}`);
    return NextResponse.json({ ok: true, delivered: false, archived: persisted, inquiryId });
  }
}
