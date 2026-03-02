"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe2, 
  CandlestickChart, 
  ArrowRight,
  Sun,
  Moon,
  Info,
  Clock,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import CourseModal from "@/components/CourseModal";

const forexPrograms = [
  {
    title: "Global Macro & Liquidity",
    tag: "Forex Level I",
    image: "https://images.unsplash.com/photo-1611974717482-482852194aee?q=80&w=1200&auto=format&fit=crop",
    desc: "Master the fundamental drivers of the currency markets. We cover Central Bank policy, Interest Rate Differentials, and Institutional Liquidity mapping.",
    icon: <Globe2 className="text-emerald-500" size={18} />,
    features: ["Macro Sentiment", "Currency Correlation", "Bespoke Liquidity Analysis"],
    batches: ["08:00 AM (Morning)", "06:00 PM (Evening)"]
  },
  {
    title: "Precision Price Action",
    tag: "Forex Level II",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    desc: "A mechanical framework for technical execution. Learn to identify high-probability institutional footprints and execute with professional risk protocols.",
    icon: <CandlestickChart className="text-emerald-500" size={18} />,
    features: ["Supply & Demand", "Algorithm Cycles", "Professional Risk Scaling"],
    batches: ["08:00 AM (Morning)", "06:00 PM (Evening)"]
  }
];

export default function ForexCurriculum() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="courses" className="relative bg-white py-24 lg:py-40 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                Institutional Forex // 2026
              </span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.85]">
              Forex <br />
              <span className="italic font-serif text-slate-300">Specialization.</span>
            </h2>
          </div>
          
          <div className="lg:pb-4 flex flex-col items-start lg:items-end gap-6">
            <div className="flex gap-3">
               <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
                  <Sun size={14} className="text-emerald-600" />
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">AM Batch Available</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
                  <Moon size={14} className="text-slate-600" />
                  <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">PM Batch Available</span>
               </div>
            </div>
          </div>
        </div>

        {/* TWO COURSE GRID */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {forexPrograms.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelected(program)}
              className="group relative bg-white border border-slate-100 p-4 rounded-[3.5rem] flex flex-col transition-all cursor-pointer hover:shadow-2xl hover:shadow-emerald-900/5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-slate-100 mb-8">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                   <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 flex items-center gap-2 shadow-xl">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      Institutional Syllabus
                   </div>
                </div>
              </div>

              <div className="px-6 pb-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-black font-mono text-emerald-600 uppercase tracking-widest">
                    {program.tag}
                  </span>
                </div>

                <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {program.desc}
                </p>

                {/* Technical Points */}
                <div className="flex flex-col gap-3 mb-10">
                   {program.features.map((f, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-600">
                        <TrendingUp size={14} className="text-emerald-500" />
                        <span className="text-xs font-medium">{f}</span>
                     </div>
                   ))}
                </div>

                {/* Footer Component */}
                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Tuition Model</p>
                    <p className="text-sm font-bold text-slate-900 italic font-serif">Fixed Rate Pathway</p>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-xl shadow-black/10">
                    <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TUITION TRANSPARENCY BLOCK */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="p-12 bg-[#0F172A] rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400 mb-6">
                <Info size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Enrolment Protocol</span>
              </div>
              <h4 className="text-4xl font-light leading-tight mb-4">
                Unified Tuition <br />
                <span className="italic font-serif text-slate-400 text-3xl">Across All Modules.</span>
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                To maintain professional integrity, we operate a single-fee structure. This ensures every participant receives the full suite of institutional resources and batch support.
              </p>
            </div>

            <button className="relative z-10 whitespace-nowrap px-10 py-6 bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl shadow-emerald-500/20">
              Request Full Curriculum & Fees
            </button>
          </div>
        </div>

      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}