"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MicroCTA() {
  const router = useRouter();

  return (
    <section className="relative py-24 bg-[#eef7f4] overflow-hidden">
      
      {/* Soft gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-emerald-200 blur-3xl opacity-40" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Your Trading Journey
          <span className="block text-emerald-600">
            Starts With One Smart Decision.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600"
        >
          Stop guessing. Start learning with structure, discipline,
          and mentorship designed for real market success.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/contact")}
          className="
          mt-10
          rounded-full
          bg-emerald-600
          px-10 py-4
          text-white
          font-semibold
          shadow-md
          hover:bg-emerald-700
          transition
          "
        >
          Contact Us →
        </motion.button>

      </div>
    </section>
  );
}
