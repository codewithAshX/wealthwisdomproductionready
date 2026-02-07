"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, BarChart3, GraduationCap, Check } from "lucide-react";
import CourseModal from "@/components/CourseModal";

const programs = [
  {
    title: "Supply & Demand",
    tag: "Institutional Core",
    image: "https://images.unsplash.com/photo-1611974714603-3555366b3a30?q=80&w=800&auto=format&fit=crop",
    desc: "A deep dive into market structure and institutional liquidity pools. Master mechanical execution.",
    price: "₹25,000",
    icon: <Target className="text-emerald-600" size={20} />
  },
  {
    title: "Options Delta Pro",
    tag: "Advanced Trading",
    image: "https://images.unsplash.com/photo-1642790103517-18129f55c531?q=80&w=800&auto=format&fit=crop",
    desc: "Strategic hedging and non-directional income models. Professional risk management frameworks.",
    price: "₹25,000",
    icon: <BarChart3 className="text-emerald-600" size={20} />
  },
  {
    title: "Elite Mentorship",
    tag: "Capital Backing",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    desc: "Direct floor access and potential backing with private capital for qualified traders.",
    price: "₹10,000",
    icon: <GraduationCap className="text-emerald-600" size={20} />
  }
];

export default function Courses() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="courses" className="bg-[#F7FCF9] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER: Clean & Balanced */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
              Curriculum // 2026
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 leading-none">
              Professional <br />
              <span className="italic font-serif text-emerald-600/80">Pathways.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em] max-w-[240px] md:text-right leading-relaxed">
            Systematic education for the modern capital manager.
          </p>
        </div>

        {/* GRID: Architectural Layout */}
        <div className="grid md:grid-cols-3 gap-px bg-emerald-100/50 border border-emerald-100 rounded-[2rem] overflow-hidden">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: "#FFFFFF" }}
              onClick={() => setSelected(program)}
              className="bg-white/80 backdrop-blur-sm p-10 flex flex-col transition-colors cursor-pointer group"
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] mb-10 overflow-hidden rounded-2xl bg-slate-100">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  {program.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">
                  {program.tag}
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                {program.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                {program.desc}
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">Tuition</span>
                  <span className="text-2xl font-bold text-slate-900 tracking-tight">{program.price}</span>
                </div>
                <div className="h-12 w-12 rounded-full border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MINIMAL FOOTER CALLOUT */}
        <div className="mt-20 py-10 border-t border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Verified Syllabus</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest">ISO Certified</span>
            </div>
          </div>
          <button className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 border-b border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
            Compare Programs →
          </button>
        </div>
      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}