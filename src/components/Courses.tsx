"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Unlock, BarChart3, Target, Zap, ChevronRight } from "lucide-react";

const courseTiers = [
  {
    level: "L-01",
    title: "The Foundation",
    price: "₹4,999",
    tags: ["Market Geometry", "Liquidity", "Structure"],
    description: "The complete re-education of how price moves. Forget retail patterns; learn to read the footprint of institutional orders.",
  },
  {
    level: "L-02",
    title: "Intraday Edge",
    price: "₹8,999",
    tags: ["Scalping", "M1 Execution", "Volume"],
    description: "Precision-based entry models for fast-paced markets. Focus on high-frequency setups with defined mechanical exits.",
  },
  {
    level: "L-03",
    title: "Mastery Desk",
    price: "₹14,999",
    tags: ["Portfolio", "Psychology", "Risk"],
    description: "The terminal stage. Learn to manage six-figure capital with institutional-grade risk parameters and mental resilience.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#0A0A0A] py-24 lg:py-40 relative overflow-hidden text-white">
      {/* Background Architectural Mark */}
      <div className="absolute -top-24 -left-24 text-[30rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        PROGRAMS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION - Minimalist & Punchy */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase">The Curriculum</span>
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
              Upgrade your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-800 italic font-serif font-light">
                Intel.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-500 text-sm font-light leading-relaxed border-l border-emerald-500/30 pl-6">
              Three distinct tiers of evolution. <br />
              Each stage builds the psychological and mechanical bridge to professional capital management.
            </p>
          </div>
        </div>

        {/* ===== THE HORIZONTAL DOSSIER LIST ===== */}
        <div className="space-y-4">
          {courseTiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative border-b border-white/10 py-12 px-4 group-hover:px-8 transition-all duration-500 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                
                {/* Level Indicator */}
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-emerald-500 mb-1">{tier.level}</span>
                  <div className="flex items-center gap-2">
                    {i === courseTiers.length - 1 ? <Lock size={14} className="text-slate-600" /> : <Unlock size={14} className="text-emerald-500" />}
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{tier.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
                  {tier.description}
                </p>

                {/* Tags */}
                <div className="hidden xl:flex gap-3">
                  {tier.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="ml-auto flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1 font-mono">Investment</p>
                    <p className="text-2xl font-bold tracking-tighter">{tier.price}</p>
                  </div>
                  <button className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== THE "LIVE DESK" BANNER (Replacement for Flagship Card) ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-8 md:p-1 w-full bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[2.5rem] overflow-hidden group cursor-pointer"
        >
          <div className="bg-[#0A0A0A] rounded-[2.4rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-12 group-hover:bg-transparent transition-colors duration-700">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="h-20 w-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-white transition-colors">
                <BarChart3 className="text-emerald-500 group-hover:text-black" size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2 tracking-tight">Institutional Mentorship</h4>
                <p className="text-slate-400 text-sm font-light max-w-xs">
                  A 6-month journey into high-stakes trading. Fully mechanical. Fully transparent.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex -space-x-4 mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-slate-800" />
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-emerald-500 flex items-center justify-center text-[10px] font-bold">
                  +200
                </div>
              </div>
              <div className="flex items-center gap-6">
                 <span className="text-xs font-mono text-emerald-500 animate-pulse">APPLICATIONS OPEN</span>
                 <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Link */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
            <div className="flex gap-12">
              <div className="flex items-center gap-2 text-slate-500">
                <Target size={14} className="text-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Mechanical Rules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Zap size={14} className="text-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Live Updates</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-light">
              Not sure? <a href="#" className="text-white hover:text-emerald-500 transition-colors font-medium">Compare all features →</a>
            </p>
        </div>
      </div>
    </section>
  );
}