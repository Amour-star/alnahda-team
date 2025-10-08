"use client";
import React from "react";

// ✅ صفحة هبوط عربية (RTL) لفريق النهضة التطوعي
// - تصميم حديث مع Tailwind
// - أقسام: ترويسة، التعريف، الأهداف، المبادرات، إعلان المكتب، تواصل
// - جاهزة للنسخ في Next.js ضمن app/page.tsx أو pages/index.tsx
// - لا تحتاج لأي إعدادات خارجية لتجربة المعاينة هنا

export default function NahdaLandingPage() {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100 shadow-sm">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-items-center font-bold shadow-sm">
              ن
            </div>
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-gray-900">
              فريق النهضة التطوعي
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {[
              { href: "#about", label: "من نحن" },
              { href: "#goals", label: "أهدافنا" },
              { href: "#initiatives", label: "مبادرات" },
              { href: "#office", label: "مكتب مارع" },
              { href: "#contact", label: "تواصل" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-emerald-700 hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Button (desktop only) */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-emerald-600 text-emerald-700 px-4 py-2 text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
          >
            انضم إلينا
          </a>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden flex flex-col items-center gap-4 bg-white border-t border-emerald-100 px-4 py-4 text-gray-800 text-sm font-medium"
        >
          {[
            { href: "#about", label: "من نحن" },
            { href: "#goals", label: "أهدافنا" },
            { href: "#initiatives", label: "مبادرات" },
            { href: "#office", label: "مكتب مارع" },
            { href: "#contact", label: "تواصل" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block w-full text-center py-2 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.add("hidden");
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block w-full text-center mt-2 rounded-xl border border-emerald-600 text-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            انضم إلينا
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.15] text-gray-900">
              معًا… نحو <span className="text-emerald-700">نهضة حقيقية</span>،
              تخدم الإنسان وتبني المستقبل
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
              نحن <span className="font-semibold">فريق النهضة التطوعي</span>،
              مجموعة من الشباب والشابات المؤمنين بدور المجتمع المدني في تحقيق
              التغيير الإيجابي. تأسس فريقنا انطلاقًا من شعور عميق بالمسؤولية
              تجاه مجتمعنا، وسعيًا لنهضة ثقافية، اجتماعية، واقتصادية.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white text-sm md:text-base font-semibold shadow hover:bg-emerald-700"
              >
                أريد التطوع
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm md:text-base hover:bg-gray-50"
              >
                تعرّف علينا أكثر
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-emerald-100">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              رسالتنا
            </h2>
            <p className="text-gray-700 leading-8">
              نؤمن بأن النهضة تبدأ من داخل المجتمع، ومن كل فرد واعٍ قادر على
              الفعل والمبادرة. وعليه، نعمل بروح التعاون ونفتح أبوابنا لكل من
              يشاركنا الرؤية والطموح.
            </p>
            <p className="mt-4 text-gray-700 leading-8">
              نرصد الثغرات والاحتياجات في المدينة ونعمل على معالجتها بطرق عملية
              وفاعلة، ونطرح مشاريع تخدم المصلحة العامة وتدعم مسار التنمية
              المستدامة.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "تعزيز التنمية الثقافية والاجتماعية عبر مبادرات توعوية وفعاليات مجتمعية.",
              "استقطاب الاستثمارات لرفع مستوى الدخل للأفراد واستدامته.",
              "طرح مشاريع ومخططات تخدم المصلحة العامة وتدعم التنمية المستدامة.",
              "رصد الثغرات والاحتياجات داخل المدينة والعمل على معالجتها بفاعلية.",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-3"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <span className="text-gray-800 leading-8">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GOALS / PILLARS */}
      <section
        id="goals"
        className="bg-emerald-50/60 border-y border-emerald-100"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-8">
            ركائز عملنا
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ثقافة ووعي", desc: "حملات تثقيف وتوعية مجتمعية" },
              {
                title: "تماسك اجتماعي",
                desc: "فعاليات تجمع وتربط بين فئات المجتمع",
              },
              {
                title: "تمكين اقتصادي",
                desc: "دعم المبادرات الصغيرة واستقطاب الاستثمار",
              },
              { title: "تنمية مستدامة", desc: "مشاريع تخدم الحاضر والمستقبل" },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-600/10 grid place-items-center mb-4">
                  <span className="text-emerald-700 font-bold">{i + 1}</span>
                </div>
                <h4 className="font-bold text-lg">{c.title}</h4>
                <p className="text-gray-700 mt-2 leading-7">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section
        id="initiatives"
        className="max-w-6xl mx-auto px-4 py-12 md:py-16"
      >
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            مبادرات قيد الإطلاق
          </h3>
          <span className="text-xs md:text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
            باب التطوع مفتوح
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "حملات توعية مجتمعية",
              text: "ورش عمل ومحاضرات عن قيم المواطنة، الصحة العامة، والوقاية، مع مواد بصرية مبسطة تصل لكل الفئات.",
            },
            {
              title: "دعم مشاريع صغيرة",
              text: "مرافقة رواد الأعمال الشباب بدراسة جدوى أولية وربطهم بمستثمرين محليين لتحقيق دخل مستدام.",
            },
            {
              title: "فعاليات تواصل اجتماعي",
              text: "تنظيم أيام مجتمعية، معارض وأنشطة للأطفال، لتعزيز الروابط وتبادل الخبرات بين الأهالي.",
            },
            {
              title: "رصد الاحتياجات والخدمات",
              text: "إعداد تقارير دورية بالثغرات داخل المدينة واقتراح حلول عملية بالتعاون مع الجهات الفاعلة.",
            },
          ].map((card, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-lg mb-2">{card.title}</h4>
              <p className="text-gray-700 leading-7">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OFFICE ANNOUNCEMENT */}
      <section id="office" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              قريبًا: مكتبنا في مدينة مارع
            </h3>
            <p className="text-gray-800 leading-8">
              قريبًا سنعلن عن عنوان المكتب الرسمي لـ{" "}
              <span className="font-semibold">فريق النهضة</span> في مدينة
              <span className="px-2 py-0.5 mx-1 rounded-full bg-white border border-emerald-200">
                #مارع
              </span>
              إلى جانب إطلاق صفحاتنا على وسائل التواصل الاجتماعي.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              تواصل معنا
            </h3>
            <p className="text-gray-700 mb-6 leading-7">
              نسأل الله التوفيق لنا ولكم لخدمة البلاد والعباد. يسعدنا تواصلكم
              واقتراحاتكم، وكذلك طلبات الانضمام للتطوع.
            </p>

            {/* ✅ Working Contact Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const payload = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"), // ✅ Added phone
                  message: formData.get("message"),
                };

                const status = form.querySelector("#status");
                if (status) status.textContent = "⏳ جارٍ الإرسال...";

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });

                  const data = await res.json();

                  if (data.ok) {
                    if (status) {
                      status.textContent = "✅ تم إرسال الرسالة بنجاح!";
                      status.className = "text-green-600 mt-3";
                    }
                    form.reset();
                  } else {
                    if (status) {
                      status.textContent =
                        "❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.";
                      status.className = "text-red-600 mt-3";
                    }
                  }
                } catch (err) {
                  if (status) {
                    status.textContent = "⚠️ خطأ في الاتصال بالخادم.";
                    status.className = "text-red-600 mt-3";
                  }
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm mb-1">الاسم الكامل</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="اكتب اسمك"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">البريد الإلكتروني</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              {/* ✅ New Phone Field */}
              <div>
                <label className="block text-sm mb-1">رقم الهاتف</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+963 9XX XXX XXX"
                  pattern="^\+?[0-9\s\-]{8,15}$"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">الرسالة</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="اكتب رسالتك أو رغبتك بالتطوع"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700 transition"
              >
                إرسال
              </button>
              <p id="status" className="text-sm text-gray-600 mt-2"></p>
            </form>
          </div>

          {/* Side Panel */}
          <div className="bg-emerald-600 text-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xl font-bold mb-3">لماذا نتطوع؟</h4>
            <p className="leading-8 text-emerald-50">
              لأن النهضة مسؤولية مشتركة تبدأ من الفرد وتنتهي بمجتمع واعٍ متعاون.
              انضم إلينا لنصنع الأثر، ونبني معًا حاضرًا أفضل ومستقبلًا أوسع
              أملًا.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["شفافية", "مسؤولية", "تعاون", "أثر مستدام"].map((tag, i) => (
                <span
                  key={i}
                  className="text-sm rounded-full bg-white/15 border border-white/20 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 text-sm">
              <p>
                صفحاتنا على وسائل التواصل{" "}
                <span className="opacity-80">(قريبًا)</span>:
              </p>
              <ul className="mt-2 space-y-1 opacity-90">
                <li>
                  فيسبوك: <span className="opacity-75">/nahda.volunteers</span>
                </li>
                <li>
                  تويتر / X: <span className="opacity-75">@NahdaTeam</span>
                </li>
                <li>
                  تلغرام: <span className="opacity-75">t.me/nahda_team</span>
                </li>
              </ul>
            </div>
          </div>
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
