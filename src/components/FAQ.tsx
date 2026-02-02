"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior experience to join the academy?",
    answer: "Not at all. We have structured our curriculum into three levels: Foundation, Professional, and Mastery. We start from the absolute basics of how the market works and build up to complex price action strategies.",
  },
  {
    question: "What makes Wealth Wisdom different from other institutes?",
    answer: "We don't sell 'get rich quick' schemes or tips. Our focus is on Rule-Based Trading. You will learn the 'Why' behind every move, backed by risk management protocols used by institutional traders.",
  },
  {
    question: "Is there any support after the course completion?",
    answer: "Yes, you get lifetime access to our private Discord community where we discuss live market setups, share weekly analysis, and host monthly doubt-clearing sessions with Mr. Palash Bandiwar.",
  },
  {
    question: "Which market segments do you cover?",
    answer: "Our strategies are based on Price Action and Market Psychology, which means they work across all segments: Equity, Futures & Options (F&O), Commodities, and even Forex.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F7FCF9] text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <HelpCircle size={14} /> Questions & Answers
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
            Common <span className="text-emerald-600">Curiosities.</span>
          </h2>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-300 ${
                openIndex === i 
                ? "bg-white border-emerald-200 shadow-xl shadow-emerald-500/5" 
                : "bg-white/50 border-emerald-50 hover:border-emerald-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left outline-none"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors ${
                  openIndex === i ? "text-emerald-600" : "text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  openIndex === i ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"
                }`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-0">
                      <div className="h-px w-full bg-emerald-50 mb-6" />
                      <p className="text-slate-500 text-lg leading-relaxed font-normal tracking-tight">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* HELP FOOTER */}
        <p className="mt-12 text-center text-slate-400 font-normal">
          Still have questions? <a href="/contact" className="text-emerald-600 font-bold hover:underline decoration-2 underline-offset-4">Talk to our team →</a>
        </p>
      </div>
    </section>
  );
}