import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Ensure Vercel uses Node.js runtime (not Edge)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // 📨 Parse and validate input
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "الرجاء ملء جميع الحقول المطلوبة." },
        { status: 400 }
      );
    }

    // 🛠️ Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for SSL (465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📬 Compose and send the email
    await transporter.sendMail({
      from: `"فريق النهضة" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `📩 رسالة جديدة من ${name}`,
      html: `
        <div style="font-family: sans-serif; direction: rtl; text-align: right;">
          <h3>📬 رسالة من موقع النهضة التطوعي</h3>
          <p><b>الاسم:</b> ${name}</p>
          <p><b>البريد:</b> ${email}</p>
          <p><b>الرسالة:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    // ✅ Success response
    return NextResponse.json({
      ok: true,
      message: "تم إرسال الرسالة بنجاح ✅",
    });
  } catch (error: any) {
    console.error("❌ Email sending failed:", error.message || error);

    // ❌ Error response
    return NextResponse.json(
      {
        ok: false,
        error: "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقًا.",
      },
      { status: 500 }
    );
  }
}
