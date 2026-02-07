"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, GraduationCap, ArrowRight, Minus, Globe, Landmark } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Institutional Enrollment", value: "5,000+", icon: <Users className="w-4 h-4" /> },
  { label: "Success Benchmark", value: "92%", icon: <TrendingUp className="w-4 h-4" /> },
  { label: "Market Tenure", value: "10+ Yrs", icon: <ShieldCheck className="w-4 h-4" /> },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F7FCF9] py-24 lg:py-40 text-slate-900">
      
      {/* ARCHITECTURAL GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-10 bg-emerald-500" />
              <span className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Institutional Profile // 2026</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] text-slate-900">
              The Architecture of <br />
              <span className="italic font-serif text-emerald-600/70 font-light">Wealth Wisdom.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:pt-20">
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em] leading-relaxed border-l border-emerald-200 pl-8">
              Founded on the principles of mechanical edge and psychological fortitude. 
              We don't just teach trading; we engineer <span className="text-slate-900 font-bold tracking-normal">Market Sovereignty.</span>
            </p>
          </div>
        </div>

        {/* MAIN STRUCTURAL BLOCK */}
        <div className="grid lg:grid-cols-12 gap-px bg-emerald-100/40 border border-emerald-100/50 rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-900/5">
          
          {/* LEFT: Visual & Core Philosophy */}
          <div className="lg:col-span-7 bg-white p-4 flex flex-col">
            <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] mb-8">
               <img
                src="/classroom.png"
                alt="Wealth Wisdom Infrastructure"
                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              />
            </div>
            
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900 uppercase">Our Core Thesis</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Wealth Wisdom Trading Academy operates as a private sanctuary for those seeking to transcend retail limitations. 
                Our methodology is rooted in <span className="text-emerald-600 font-bold italic">Supply & Demand dynamics</span> and 
                <span className="text-emerald-600 font-bold italic"> Institutional Order Flow.</span> We believe that a trader's greatest 
                edge is not a tool, but a disciplined, rules-based framework that removes human bias from the equation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-50">
                <div className="flex items-start gap-3">
                  <Globe className="text-emerald-500 mt-1" size={16} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Global Standards</h4>
                    <p className="text-[11px] text-slate-400">Curriculum aligned with international prop-firm benchmarks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Landmark className="text-emerald-500 mt-1" size={16} />
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Legacy Focused</h4>
                    <p className="text-[11px] text-slate-400">10+ years of refining profitable market blueprints.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Metrics & Master CTA */}
          <div className="lg:col-span-5 bg-white p-12 flex flex-col">
            <div className="space-y-12 flex-grow">
              {stats.map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex flex-col gap-2"
                >
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-emerald-500">Metric // 0{i+1}</span>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* THE NEW "MORE ABOUT US" BUTTON */}
            <div className="mt-16">
              <Link href="/about-wisdom">
                <motion.div
                  whileHover={{ gap: '2rem' }}
                  className="flex items-center justify-between p-6 bg-slate-900 text-white rounded-[2rem] group transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900">
                      <GraduationCap size={20} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Read Master Dossier</span>
                  </div>
                  <ArrowRight size={20} className="group-hover:text-emerald-400" />
                </motion.div>
              </Link>
              <p className="text-[9px] text-slate-300 uppercase tracking-widest font-bold mt-4 text-center">
                Click to explore our full history and institutional roadmap
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}