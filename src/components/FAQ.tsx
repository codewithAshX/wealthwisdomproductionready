"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is this course suitable for beginners?",
    a: "Yes, our programs are designed from absolute beginner to advanced level. You’ll be guided step by step with practical market examples.",
  },
  {
    q: "Do you provide live market support?",
    a: "Yes, live market guidance and mentor support are included in our mentorship programs to help you trade confidently.",
  },
  {
    q: "Is trading risky?",
    a: "Trading involves risk, but with proper education, risk management, and discipline, risks can be controlled effectively.",
  },
  {
    q: "Will I get recordings of the classes?",
    a: "Yes, all live sessions are recorded and shared so you can revise concepts anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 md:py-36 bg-[#eef7f4] scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-emerald-600 text-sm">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 bg-emerald-500 rounded-full" />
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                rounded-2xl
                border border-emerald-100
                bg-white
                p-7
                shadow-sm
                hover:shadow-md
                transition
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.q}
                  </h3>

                  <span className="text-emerald-600">
                    {isOpen ? <Minus size={20}/> : <Plus size={20}/>}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
