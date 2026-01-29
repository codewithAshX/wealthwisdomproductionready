"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroMint() {
  const router = useRouter();

  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gradient-to-b from-emerald-50 via-white to-teal-50
      "
    >
      {/* Ambient Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200 blur-[160px] rounded-full opacity-40"/>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* HERO HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-semibold
          tracking-tight
          text-gray-900
          leading-[1.05]
          "
        >
          Trade With Clarity.
          <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Build Wealth Consistently.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
          mt-8
          text-lg
          md:text-xl
          text-gray-600
          max-w-2xl
          mx-auto
          "
        >
          Professional mentorship designed to help you master the markets
          with discipline, risk management, and proven strategies.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <button
            onClick={() => router.push("/contact")}
            className="
            px-8 py-4
            rounded-full
            bg-emerald-600
            text-white
            font-semibold
            shadow-lg
            hover:scale-105
            transition
            "
          >
            Start Your Trading Journey
          </button>

          <button
            onClick={() =>
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
            px-8 py-4
            rounded-full
            border border-emerald-200
            text-gray-700
            hover:bg-emerald-50
            transition
            "
          >
            Explore Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
}
