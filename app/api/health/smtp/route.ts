import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!process.env.DIAG_TOKEN || token !== process.env.DIAG_TOKEN) return new NextResponse(null, { status: 404 });

  const { RESEND_API_KEY, RFQ_TO_EMAIL, RFQ_FROM_EMAIL, INQUIRY_LOG_PATH } = process.env;
  return NextResponse.json({
    ok: Boolean(RESEND_API_KEY && RFQ_TO_EMAIL && RFQ_FROM_EMAIL),
    provider: "resend",
    configured: {
      apiKey: Boolean(RESEND_API_KEY),
      to: Boolean(RFQ_TO_EMAIL),
      from: Boolean(RFQ_FROM_EMAIL),
      persistentArchive: Boolean(INQUIRY_LOG_PATH),
    },
  });
}
