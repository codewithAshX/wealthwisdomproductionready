"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MicroCTA() {
  const router = useRouter();

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      
      {/* Soft gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-yellow-400 blur-3xl opacity-20" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight"
        >
          Your Build Journey
          <span className="block text-yellow-400">
            Starts With One Smart Plan.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-slate-300"
        >
          Share your vision and we'll craft a build plan that delivers on time and on budget.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/contact")}
          className="
          mt-10
          rounded-full
          bg-yellow-400
          px-10 py-4
          text-black
          font-semibold
          shadow-lg
          hover:bg-yellow-300
          transition
          "
        >
          Request a Quote →
        </motion.button>

      </div>
    </section>
  );
}
