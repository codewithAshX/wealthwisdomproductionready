"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <section className="pt-28 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-white" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <span className="inline-block mb-4 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-widest text-emerald-700">
            ABOUT US
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
            About <span className="text-emerald-600">Wealth Wisdom Trading Academy</span>
          </h1>

          <div className="text-sm md:text-base leading-7 text-gray-700 space-y-6">
            <p>
              Wealth Wisdom Trading Academy is a professional stock market
              education institute focused on building disciplined, confident,
              and consistent traders. We believe trading is a skill — not
              gambling — and it must be learned with structure, patience, and
              proper mentorship.
            </p>

            <p>
              Our academy is built on transparency, risk management, and
              real-market experience. We train students to understand market
              behavior, control emotions, and follow rule-based trading systems
              that work across market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT CONTENT */}
          <div className="grid gap-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Our Vision
              </h2>
              <p className="text-sm leading-7 text-gray-700">
                To become India’s most trusted trading education institute by
                creating knowledgeable traders who focus on consistency,
                capital protection, and long-term wealth creation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Our Mission
              </h2>
              <p className="text-sm leading-7 text-gray-700 mb-4">
                To simplify stock market learning through structured courses,
                live market training, and practical mentorship.
              </p>

              <p className="text-sm leading-7 text-gray-700">
                We aim to help traders master technical analysis, price action,
                risk management, and trading psychology — the true foundations
                of successful trading.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[420px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/classroom.png"
              alt="Wealth Wisdom Trading Academy Classroom"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= QUOTE STRIP ================= */}
      <section className="relative bg-emerald-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-white text-2xl md:text-3xl font-extrabold leading-relaxed">
            Trading is not about predicting the market.
            <br />
            It’s about <span className="text-gray-900">discipline, risk & consistency</span>.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER / MENTOR SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/classroom.png"
              alt="Founder & Head Mentor"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>

          {/* CONTENT */}
          <div>
            <span className="inline-block mb-3 text-xs tracking-widest font-semibold text-emerald-600">
              FOUNDER & HEAD MENTOR
            </span>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Mr. <span className="text-emerald-600">Palash Bandiwar</span>
            </h2>

            <p className="font-medium mb-6 text-gray-600">
              Professional Trader & Market Educator
            </p>

            <div className="text-sm leading-7 text-gray-700 space-y-4">
              <p>
                With years of real-market trading experience, our founder
                established Wealth Wisdom Trading Academy to bridge the gap
                between theory and practical trading.
              </p>

              <p>
                The focus has always been on teaching traders how to think,
                manage risk, and survive in the markets — not on shortcuts,
                tips, or false promises.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
