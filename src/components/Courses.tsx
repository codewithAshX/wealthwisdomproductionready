"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Unlock, BarChart3, Target, Zap, ChevronRight } from "lucide-react";

const courseTiers = [
  {
    level: "S-01",
    title: "Residential Build",
    price: "From $48,000",
    tags: ["Design", "Permitting", "Construction"],
    description: "Complete home builds with precision planning, modern finishes and efficient workflows.",
  },
  {
    level: "S-02",
    title: "Commercial Spaces",
    price: "From $120,000",
    tags: ["Fit-Out", "Compliance", "Project Management"],
    description: "Turnkey commercial construction with an emphasis on durability, function, and brand identity.",
  },
  {
    level: "S-03",
    title: "Renovations & Extensions",
    price: "From $32,000",
    tags: ["Restoration", "Adaptive", "Value"],
    description: "Thoughtful upgrades that elevate existing spaces while preserving integrity and character.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#0A0A0A] py-24 lg:py-40 relative overflow-hidden text-white">
      {/* Background Architectural Mark */}
      <div className="absolute -top-24 -left-24 text-[30rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        SERVICES
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
              <div className="h-[1px] w-12 bg-yellow-400" />
              <span className="text-yellow-400 font-mono text-[10px] tracking-[0.5em] uppercase">Our Services</span>
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
              Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white italic font-serif font-light">
                lasting impact.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-white/70 text-sm font-light leading-relaxed border-l border-white/20 pl-6">
              Choose the service level that fits your scope. Each plan is designed to deliver structure, clarity, and results.
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
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative border-b border-white/10 py-12 px-4 group-hover:px-8 transition-all duration-500 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                
                {/* Level Indicator */}
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-yellow-400 mb-1">{tier.level}</span>
                  <div className="flex items-center gap-2">
                    {i === courseTiers.length - 1 ? <Lock size={14} className="text-slate-600" /> : <Unlock size={14} className="text-yellow-400" />}
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
                  <button className="h-14 w-14 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
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
          className="mt-32 p-8 md:p-1 w-full bg-gradient-to-r from-yellow-400 to-white/10 rounded-[2.5rem] overflow-hidden group cursor-pointer"
        >
          <div className="bg-[#0A0A0A] rounded-[2.4rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-12 group-hover:bg-transparent transition-colors duration-700">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="h-20 w-20 rounded-3xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20 group-hover:bg-white transition-colors">
                <BarChart3 className="text-yellow-400 group-hover:text-black" size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2 tracking-tight">Project Delivery</h4>
                <p className="text-white/70 text-sm font-light max-w-xs">
                  End-to-end coordination that keeps timelines tight and quality high.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex -space-x-4 mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-slate-800" />
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-yellow-400 flex items-center justify-center text-[10px] font-bold">
                  +200
                </div>
              </div>
              <div className="flex items-center gap-6">
                 <span className="text-xs font-mono text-yellow-400 animate-pulse">APPLICATIONS OPEN</span>
                 <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Link */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
            <div className="flex gap-12">
              <div className="flex items-center gap-2 text-slate-300">
                <Target size={14} className="text-yellow-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Process Rules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap size={14} className="text-yellow-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Live Updates</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-light">
              Not sure? <a href="#" className="text-white hover:text-yellow-400 transition-colors font-medium">Compare all features →</a>
            </p>
        </div>
      </div>
    </section>
  );
}