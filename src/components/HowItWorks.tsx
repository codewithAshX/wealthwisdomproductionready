"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Make a Decision",
    desc: "Commit to your financial goals with a clear, focused roadmap. The first step is always the hardest, but we make it the clearest.",
    gif: "/1.gif",
  },
  {
    step: "02",
    title: "Subscribe",
    desc: "Choose your path and gain instant access to our elite portal. No fluff, just direct entry into institutional grade tools.",
    gif: "/2.gif",
  },
  {
    step: "03",
    title: "Live Learning",
    desc: "Master price action through live sessions and mentor interactions. Real markets, real time, real results.",
    gif: "/3.gif",
  },
  {
    step: "04",
    title: "Transformation",
    desc: "Execute with discipline and trade like the top 1% of the market. Finalize your evolution from retail to pro.",
    gif: "/4.gif",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] -z-10 opacity-60" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-600 font-mono text-xs tracking-[0.4em] uppercase mb-4 block"
            >
              The Evolution
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.85]">
              The <span className="italic font-serif text-emerald-600/80">Process.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-[240px] text-xs uppercase tracking-widest leading-relaxed border-l border-emerald-100 pl-6">
            Four phases of mechanical discipline and mental shift.
          </p>
        </div>

        {/* Steps Path */}
        <div className="relative">
          {/* THE DRAWING LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            />
          </div>

          <div className="space-y-32 md:space-y-48">
            {steps.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={item.step} className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-[45%] z-10"
                  >
                    <div className="group relative">
                      <div className="mb-6 flex items-baseline gap-4">
                        <span className="text-4xl md:text-5xl font-serif italic text-emerald-200 group-hover:text-emerald-500 transition-colors duration-500">
                          {item.step}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                      </div>
                      
                      <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-emerald-500/10 transition-all duration-700">
                        
                        {/* UPDATED GIF CONTAINER: Scaled for Desktop visibility */}
                       <div className="
  mb-10 
  rounded-[2rem] 
  bg-emerald-50/40 
  flex items-center justify-center 
  overflow-hidden

  /* MOBILE SIZE */
  h-[160px] w-[160px]

  /* TABLET */
  sm:h-[200px] sm:w-[200px]

  /* LAPTOP */
  md:h-[260px] md:w-[260px]

  /* DESKTOP */
  lg:h-[320px] lg:w-[320px]

  /* LARGE SCREENS */
  xl:h-[380px] xl:w-[380px]
">
  <motion.img 
    whileHover={{ scale: 1.08 }}
    transition={{ type: "spring", stiffness: 180, damping: 15 }}
    src={item.gif} 
    alt={item.title} 
    className="w-full h-full object-contain"
  />
</div>

                        <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Indicator Dot on the line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <motion.div 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                       className="h-6 w-6 rounded-full bg-white border-[6px] border-emerald-500 shadow-xl" 
                    />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}