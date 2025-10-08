import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "الرجاء ملء جميع الحقول المطلوبة." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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
          <p><b>الهاتف:</b> ${phone || "لم يُذكر"}</p>
          <p><b>الرسالة:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "تم إرسال الرسالة بنجاح ✅",
    });
  } catch (error: any) {
    console.error("❌ Email sending failed:", error.message || error);
    return NextResponse.json(
      { ok: false, error: "حدث خطأ أثناء إرسال الرسالة." },
      { status: 500 }
    );
  }
}
