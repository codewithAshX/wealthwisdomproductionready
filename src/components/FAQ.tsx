"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Database,
  HardHat,
  FileText,
} from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "How do you ensure project timelines?",
    answer:
      "We follow milestone-based execution with strict weekly audits and dedicated project management systems to ensure every phase is delivered on schedule.",
  },
  {
    id: "02",
    question: "What about construction quality?",
    answer:
      "Each project undergoes multi-stage quality inspections, ensuring superior materials, structural integrity, and premium finishing standards.",
  },
  {
    id: "03",
    question: "Do you handle legal approvals?",
    answer:
      "Yes, we manage all legal processes including RERA compliance, zoning approvals, and documentation to ensure complete transparency.",
  },
  {
    id: "04",
    question: "How is budget managed?",
    answer:
      "We maintain complete cost transparency with structured planning, ensuring there are no hidden charges or financial surprises.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#050507] py-28 lg:py-40 relative overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-24 text-center">
          <p className="text-xs tracking-[0.3em] text-amber-400 uppercase mb-6">
            FAQ
          </p>

          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Frequently Asked <br />
            <span className="text-amber-400">Questions</span>
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-amber-400 text-xs tracking-widest">
                    {faq.id}
                  </span>

                  <h3 className="text-lg md:text-xl text-white group-hover:text-amber-400 transition">
                    {faq.question}
                  </h3>
                </div>

                <ArrowUpRight
                  className={`transition-transform ${
                    openIndex === i
                      ? "rotate-45 text-amber-400"
                      : "text-white/40"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-24 p-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-2xl text-white font-medium">
              Still have questions?
            </h4>
            <p className="text-white/50 text-sm mt-2">
              Our team will guide you through every step.
            </p>
          </div>

          <button className="px-6 py-3 bg-amber-500 text-black rounded-full text-sm font-semibold hover:bg-amber-400 transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}