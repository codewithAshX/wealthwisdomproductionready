"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Target, 
  BarChart3, 
  GraduationCap, 
  Check, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import CourseModal from "@/components/CourseModal";

const programs = [
  {
    title: "Supply & Demand",
    tag: "Institutional Core",
    // --- UPDATED IMAGE URL ---
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    desc: "A mechanical deep-dive into order flow and liquidity pools...",
    price: "₹25,000",
    icon: <Target className="text-emerald-500" size={18} />,
    features: ["Market Structure", "Liquidity Mapping", "Order Flow"]
  },
  {
    title: "Options Delta Pro",
    tag: "Advanced Trading",
    // --- UPDATED IMAGE URL ---
    image: "https://images.unsplash.com/photo-1640166297316-015843a0d5c0?q=80&w=1200&auto=format&fit=crop",
    desc: "Strategic Greek-based hedging and non-directional income models...",
    price: "₹25,000",
    icon: <BarChart3 className="text-emerald-500" size={18} />,
    features: ["Greeks Analysis", "Hedging Systems", "VIX Strategies"]
  },
  {
    title: "Elite Mentorship",
    tag: "Capital Backing",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    desc: "Direct floor access and potential backing with private capital. Reserved for those who have mastered the mechanical framework.",
    price: "₹10,000",
    icon: <GraduationCap className="text-emerald-500" size={18} />,
    features: ["Floor Access", "Fund Allocation", "1-on-1 Review"]
  }
];

export default function Courses() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="courses" className="relative bg-[#FCFCFC] py-24 lg:py-40 overflow-hidden">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 h-full w-[1px] bg-slate-100 hidden lg:block" />
        <div className="absolute left-[90%] top-0 h-full w-[1px] bg-slate-100 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                Curriculum // 2026
              </span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.85]">
              Professional <br />
              <span className="italic font-serif text-slate-300">Pathways.</span>
            </h2>
          </div>
          
          <div className="lg:pt-12">
            <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] border-l border-slate-200 pl-6">
              Systematic education designed for the modern capital manager. Not just strategies, but industrial infrastructure.
            </p>
          </div>
        </div>

        {/* PROGRAM GRID */}
        <div className="grid lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelected(program)}
              className="bg-white p-8 lg:p-12 flex flex-col transition-all cursor-pointer group hover:z-10 relative overflow-hidden"
            >
              {/* Image Frame with Overlay */}
              <div className="relative aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-slate-100">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-[10px] font-mono tracking-widest uppercase flex items-center gap-2">
                    <TrendingUp size={12} className="text-emerald-400" /> View Syllabus
                  </span>
                </div>
              </div>

              {/* Tag & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    {program.icon}
                  </div>
                  <span className="text-[10px] font-black font-mono text-slate-400 group-hover:text-emerald-600 uppercase tracking-widest transition-colors">
                    {program.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-light tracking-tight text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                {program.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {program.desc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {program.features.map((f, i) => (
                  <span key={i} className="text-[9px] font-bold uppercase tracking-tighter bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100 group-hover:border-emerald-100 group-hover:text-emerald-500 transition-all">
                    {f}
                  </span>
                ))}
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono font-black text-slate-300 uppercase tracking-widest mb-1">Tuition</span>
                  <span className="text-3xl font-light text-slate-900 tracking-tighter">{program.price}</span>
                </div>
                <div className="h-14 w-14 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METRICS */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-500" size={18} />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Institutional syllabus</span>
                <span className="text-[10px] text-slate-400 uppercase">Verified for 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="text-emerald-500" size={18} />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Performance Tracking</span>
                <span className="text-[10px] text-slate-400 uppercase">Proprietary Benchmarks</span>
              </div>
            </div>
          </div>

          <button className="group relative px-8 py-4 bg-transparent text-slate-900 overflow-hidden">
            <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Compare Detailed Programs</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-slate-900 group-hover:h-full group-hover:bg-slate-50 transition-all duration-300 -z-0" />
          </button>
        </div>
      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}