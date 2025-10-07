import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false otherwise
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });

    await transporter.sendMail({
      from: `"Nahda Website" <${
        process.env.SMTP_FROM || process.env.SMTP_USER
      }>`,
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: `رسالة تطوع/تواصل من: ${name}`,
      text: message,
      html: `<p><b>الاسم:</b> ${name}</p><p><b>البريد:</b> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 500 }
    );
  }
}
export const runtime = 'nodejs';