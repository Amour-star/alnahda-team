"use client";

import React from "react";
import { useState } from "react";

export default function NahdaLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-emerald-100">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-items-center font-bold">
              ن
            </div>
            <span className="font-extrabold text-lg md:text-xl tracking-tight">
              فريق النهضة التطوعي
            </span>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.15] text-gray-900">
          معًا… نحو <span className="text-emerald-700">نهضة حقيقية</span> تخدم
          الإنسان وتبني المستقبل
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
          نحن <span className="font-semibold">فريق النهضة التطوعي</span>، مجموعة
          من الشباب والشابات المؤمنين بدور المجتمع المدني في تحقيق التغيير
          الإيجابي.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            تواصل معنا
          </h3>
          <p className="text-gray-700 mb-6 leading-7">
            يسعدنا تواصلكم واقتراحاتكم، وكذلك طلبات الانضمام للتطوع.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="اكتب اسمك"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">الرسالة</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="اكتب رسالتك أو رغبتك بالتطوع"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full md:w-auto rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700 disabled:opacity-70"
            >
              {status === "loading" ? "جارٍ الإرسال..." : "إرسال"}
            </button>
            {status === "success" && (
              <p className="text-green-600 mt-3">تم الإرسال بنجاح!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-3">حدث خطأ، حاول مرة أخرى.</p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-100 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>نسأل الله أن يوفقنا وإياكم لتقديم كل ما هو نافع.</p>
          <p className="opacity-80">
            © {new Date().getFullYear()} فريق النهضة التطوعي
          </p>
        </div>
      </footer>
    </div>
  );
}
