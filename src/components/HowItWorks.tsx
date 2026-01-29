"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    title: "Make a Decision",
    desc: "Start your journey towards financial independence with a clear goal.",
    gif: "1.gif",
  },
  {
    step: "Step 2",
    title: "Subscribe",
    desc: "Choose the right course and get instant access to structured learning.",
    gif: "2.gif",
  },
  {
    step: "Step 3",
    title: "Live Learning",
    desc: "Attend live sessions, access recordings, and learn directly from mentors.",
    gif: "3.gif",
  },
  {
    step: "Step 4",
    title: "Transformation",
    desc: "Apply strategies, gain confidence, and trade like a professional.",
    gif: "4.gif",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Journey of a Student at GTF
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-emerald-500">
            How Does it Works
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-emerald-500 rounded-full" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border border-emerald-100"
            >
              {/* Step Badge */}
              <span className="inline-block mb-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">
                {item.step}
              </span>

              {/* GIF */}
              <img
                src={item.gif}
                alt={item.title}
                className="mx-auto h-32 object-contain"
              />

              {/* Content */}
              <h3 className="mt-6 font-bold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
