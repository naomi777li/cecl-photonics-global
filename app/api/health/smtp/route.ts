import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!process.env.DIAG_TOKEN || token !== process.env.DIAG_TOKEN) return new NextResponse(null, { status: 404 });
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, INQUIRY_TO, INQUIRY_LOG_PATH } = process.env;
  const configured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
  if (!configured) {
    return NextResponse.json({ ok: false, configured, variables: { SMTP_HOST: Boolean(SMTP_HOST), SMTP_PORT: Boolean(SMTP_PORT), SMTP_USER: Boolean(SMTP_USER), SMTP_PASS: Boolean(SMTP_PASS), INQUIRY_TO: Boolean(INQUIRY_TO), INQUIRY_LOG_PATH: Boolean(INQUIRY_LOG_PATH) } });
  }
  try {
    const port = Number(SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS }, connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000 });
    await transporter.verify();
    return NextResponse.json({ ok: true, configured: true, smtp: { host: SMTP_HOST, port, user: SMTP_USER, to: INQUIRY_TO || "sales@ceclphotonics.com" }, persistentArchive: Boolean(INQUIRY_LOG_PATH) });
  } catch (error) {
    const smtpError = error as { code?: string; responseCode?: number; message?: string };
    return NextResponse.json({ ok: false, configured: true, error: { code: smtpError.code || "UNKNOWN", responseCode: smtpError.responseCode || null, message: smtpError.message || "SMTP verification failed" } }, { status: 503 });
  }
}
