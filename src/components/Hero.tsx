"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Play } from "lucide-react";

export default function HeroMint() {
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F8FDFB] px-6">
      
      {/* Background Glows - Adjusted for better blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-emerald-100/40 blur-[120px] rounded-full -z-10" />

      <div className="w-full max-w-6xl mx-auto text-center mt-20">
        
        {/* BADGE: Moved below nav flow to prevent overlap */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-10 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Next Enrollment: March 1st
        </motion.div>

        {/* HEADLINE: Fluid typography and tighter line height */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.95] md:leading-[1.0]"
        >
          Trade With <span className="text-emerald-500">Clarity.</span>
          <span className="block bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent mt-2">
            Build Wealth Consistently.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Ditch the noise. Join a community of disciplined traders using 
          institutional-grade strategies to master the financial markets.
        </motion.p>

        {/* CTAs: Consistent sizing and better shadows */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4 items-center"
        >
          <button
            onClick={() => router.push("/contact")}
            className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#0F172A] text-white font-bold shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)] hover:bg-emerald-600 hover:shadow-emerald-200 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-600 font-semibold hover:bg-white hover:shadow-lg transition-all flex items-center justify-center gap-3"
          >
            <Play className="w-4 h-4 fill-slate-600" />
            Watch Preview
          </button>
        </motion.div>
      </div>
    </section>
  );
}