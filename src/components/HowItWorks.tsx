"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Make a Decision",
    desc: "Commit to your financial goals with a clear, focused roadmap.",
    gif: "1.gif",
  },
  {
    step: "02",
    title: "Subscribe",
    desc: "Choose your path and gain instant access to our elite portal.",
    gif: "2.gif",
  },
  {
    step: "03",
    title: "Live Learning",
    desc: "Master price action through live sessions and mentor interactions.",
    gif: "3.gif",
  },
  {
    step: "04",
    title: "Transformation",
    desc: "Execute with discipline and trade like the top 1% of the market.",
    gif: "4.gif",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F7FCF9] py-32 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.4em] text-emerald-600 font-bold uppercase mb-4"
          >
            The Path to Mastery
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-none">
            How It <span className="text-emerald-600">Works.</span>
          </h2>
          <p className="mt-6 text-slate-500 font-normal max-w-xl mx-auto">
            A structured 4-step transition from a retail mindset to professional execution.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-emerald-100 -z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] p-10 text-center border border-emerald-50 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                {item.step}
              </div>

              {/* GIF / Illustration Container */}
              <div className="relative h-32 w-full mb-8 flex items-center justify-center bg-emerald-50/50 rounded-2xl overflow-hidden">
                <img
                  src={item.gif}
                  alt={item.title}
                  className="h-24 w-24 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-500 text-sm leading-relaxed font-normal tracking-tight">
                {item.desc}
              </p>
              
              {/* Decorative "Done" circle for the path */}
              <div className="hidden md:flex absolute -bottom-10 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white border-4 border-emerald-100 group-hover:border-emerald-500 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />
    </section>
  );
}