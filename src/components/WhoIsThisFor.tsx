"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const audiences = [
  {
    id: "professionals",
    title: "Working Professionals",
    desc:
      "Working professionals who want to generate extra income from the stock market by identifying high-probability demand zones.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "housewives",
    title: "Housewives",
    desc:
      "Learn how to identify passive income opportunities, understand market trends, and make confident investment decisions.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "business",
    title: "Business Owners",
    desc:
      "Entrepreneurs gain financial analysis skills, valuation techniques, and risk management strategies to optimize capital.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhoIsThisFor() {
  const [active, setActive] = useState(audiences[0]);

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Journey of a Student at GTF
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-500">
            Who Is This Program For
          </h2>
          <div className="mt-4 h-1 w-28 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE PANEL */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={active.image}
              alt={active.title}
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* CONTENT CARDS */}
          <div className="space-y-8">
            {audiences.map((item) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActive(item)}
                whileHover={{ y: -4 }}
                className={`cursor-pointer rounded-xl p-6 border transition shadow-sm
                  ${
                    active.id === item.id
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-100 bg-white"
                  }
                `}
              >
                <h3 className="font-bold text-lg text-sky-500">
                  {item.title.toUpperCase()}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
