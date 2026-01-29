"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const router = useRouter();

  return (
    <section className="py-24 bg-[#eef7f4] text-center">
      <div className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-gray-900">
          Still Have Questions?
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Speak with our team and get clarity before you begin your trading journey.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")}
          className="
          mt-8
          bg-emerald-600
          text-white
          px-8 py-4
          rounded-full
          font-semibold
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
