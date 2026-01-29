"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 h-10 w-10 rotate-12 rounded-lg border border-emerald-200" />
      <div className="absolute bottom-24 right-16 h-14 w-14 rotate-12 rounded-lg bg-emerald-100" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        {/* LEFT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/classroom.png"
              alt="Wealth Wisdom Trading Academy"
              className="w-full object-cover"
            />
          </div>

          {/* Floating logo */}
          <div className="absolute -top-8 right-6 w-36 rounded-xl border bg-white p-3 shadow-xl">
            <img src="/about/logo.jpg" alt="Wealth Wisdom Logo" />
          </div>
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* BRAND PILL */}
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold tracking-widest text-emerald-600">
            ABOUT US
          </span>

          {/* HEADLINE */}
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            India’s Trusted Stock Market Institute
            <br />
            <span className="relative inline-block bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent">
              Wealth Wisdom Trading Academy
            </span>
          </h2>

          {/* ACCENT LINE */}
          <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-green-500" />

          {/* CONTENT */}
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Welcome to <strong>Wealth Wisdom Trading Academy</strong>, where
              ambition meets disciplined trading education. We empower aspiring
              traders with practical knowledge, real market exposure, and
              confidence to trade professionally.
            </p>

            <p>
              Our structured programs focus on <strong>technical analysis</strong>,
              <strong> risk management</strong>, and <strong>real-world strategies</strong>.
              Whether you’re starting out or refining your edge, our mentorship
              ensures clarity, consistency, and long-term growth.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/about"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-10 py-4 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
          >
            Explore Wealth Wisdom
          </a>
        </motion.div>
      </div>
    </section>
  );
}
