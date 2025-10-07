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
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <a href="#about" className="hover:text-emerald-700">
                من نحن
              </a>
            </li>
            <li>
              <a href="#goals" className="hover:text-emerald-700">
                أهدافنا
              </a>
            </li>
            <li>
              <a href="#initiatives" className="hover:text-emerald-700">
                مبادرات
              </a>
            </li>
            <li>
              <a href="#office" className="hover:text-emerald-700">
                مكتب مارع
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-700">
                تواصل
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-emerald-600 text-emerald-700 px-4 py-2 text-sm hover:bg-emerald-600 hover:text-white transition"
          >
            انضم إلينا
          </a>
        </nav>
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
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              تواصل معنا
            </h3>
            <p className="text-gray-700 mb-6 leading-7">
              نسأل الله التوفيق لنا ولكم لخدمة البلاد والعباد. يسعدنا تواصلكم
              واقتراحاتكم، وكذلك طلبات الانضمام للتطوع.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="اكتب اسمك"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">الرسالة</label>
                <textarea
                  rows={4}
                  placeholder="اكتب رسالتك أو رغبتك بالتطوع"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700"
                title="هذا مثال واجهة فقط—أضف ربطًا بخادم بريد لاحقًا"
              >
                إرسال
              </button>
              <p className="text-xs text-gray-500">
                * هذا النموذج تجريبي. يمكن ربطه لاحقًا ببريد إلكتروني أو Google
                Forms.
              </p>
            </form>
          </div>
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
