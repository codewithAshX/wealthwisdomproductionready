"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Home, Globe, ArrowUpRight } from "lucide-react";

const audiences = [
  {
    id: "professionals",
    title: "Working Professionals",
    icon: <Briefcase size={18} strokeWidth={1.5} />,
    desc: "Generate high-probability passive income alongside your career by mastering institutional demand zones.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "housewives",
    title: "Homemakers",
    icon: <Home size={18} strokeWidth={1.5} />,
    desc: "Gain financial independence from home. Learn to identify market trends and make confident investment decisions.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "business",
    title: "Business Owners",
    icon: <Globe size={18} strokeWidth={1.5} />,
    desc: "Master valuation and risk management to optimize your business capital and build long-term personal wealth.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhoIsThisFor() {
  const [active, setActive] = useState(audiences[0]);

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Blobs (Matching previous sections) */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-600 font-mono text-xs tracking-[0.4em] uppercase mb-4 block"
            >
              Curation
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.85]">
              Designed <br />
              <span className="italic font-serif text-emerald-600/80">for you.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-slate-400 max-w-[280px] text-xs uppercase tracking-widest leading-relaxed border-r-0 md:border-r border-emerald-100 pr-0 md:pr-6 ml-auto">
              A specialized curriculum that respects your time and objectives.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Interaction Menu (Left) */}
          <div className="lg:col-span-5 border-t border-slate-100">
            {audiences.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(item)}
                className={`group relative py-10 border-b border-slate-100 cursor-pointer transition-all duration-500`}
              >
                <div className="flex items-center justify-between z-10 relative">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-slate-300">0{index + 1}</span>
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
                      active.id === item.id ? "text-slate-900" : "text-slate-300 group-hover:text-slate-500"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <div className={`transition-all duration-500 ${
                    active.id === item.id ? "rotate-45 text-emerald-500" : "text-slate-200"
                  }`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Animated Description */}
                <AnimatePresence>
                  {active.id === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 pl-10 text-slate-500 max-w-sm text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Background Hover Highlight */}
                {active.id === item.id && (
                  <motion.div 
                    layoutId="highlight"
                    className="absolute inset-0 bg-emerald-50/30 -z-10 rounded-xl"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Minimal Image Showcase (Right) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/5] max-w-md group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-slate-100 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:scale-105" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                >
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
                <p className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 mb-2">Benefit</p>
                <p className="text-sm font-light leading-snug">Tailored Price Action <br/> Framework</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}