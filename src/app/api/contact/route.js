import { NextResponse } from "next/server";
// Contact form endpoint — validates and accepts the submission.
// TODO: wire up delivery (Nodemailer / Resend / SMTP) using env vars.
export async function POST(req) {
  const body = await req.json().catch(() => null);
  const { name, email, message, category } = body ?? {};
  if (!name || !email || !message || !category || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
  }
  console.log("[contact]", { name, email, category });
  return NextResponse.json({ ok: true });
}
