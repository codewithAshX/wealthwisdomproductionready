"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Globe,
  Zap,
  Play,
  Layers,
  ChevronRight,
  ShieldCheck,
  BarChart3
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArchitectAbout() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-44">
      {/* Subtle Mint Background Element */}
      <div className="absolute top-0 right-0 w-full h-full bg-[#F0FDF4]/50 pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* SECTION 1: PROFESSIONAL HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                Institutional Trading Education
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Providing the <span className="text-emerald-600">Infrastructure</span> for Professional Trading.
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We specialize in teaching the mechanical frameworks used by institutional desks to navigate global markets. Our curriculum is designed to move traders beyond retail concepts toward professional-grade execution and liquidity analysis.
            </p>
            
            {/* SESSION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Morning Batch</p>
                  <p className="text-base font-semibold text-slate-900">08:00 AM Session</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ChevronRight size={16} />
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Evening Batch</p>
                  <p className="text-base font-semibold text-slate-900">06:00 PM Session</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: PROFESSIONAL IMAGE & ANALYTICS */}
        <div className="relative mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Main Institutional Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px]"
            >
              <Image
                src="http://googleusercontent.com/image_collection/image_retrieval/8866941327767375655_0"
                alt="Institutional Trading Environment"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4 text-white">
                <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-semibold">Institutional Methodology</p>
                  <p className="text-xs opacity-80 font-mono">CORE_CURRICULUM_OVERVIEW</p>
                </div>
              </div>
            </motion.div>

            {/* Feature Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {[
                { title: "Liquidity Mapping", desc: "Identify institutional order flow and supply/demand zones.", icon: BarChart3 },
                { title: "Risk Management", desc: "Professional position sizing and exposure protocols.", icon: ShieldCheck },
                { title: "Global Markets", desc: "Applicable to Equities, Forex, and Digital Assets.", icon: Globe }
              ].map((feature, i) => (
                <div key={i} className="flex-1 p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-center">
                  <feature.icon className="text-emerald-400 mb-4" size={24} />
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: FINAL CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-emerald-50 rounded-[3rem] p-10 lg:p-20 border border-emerald-100">
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to professionalize your market approach?
            </h3>
            <p className="text-slate-600">
              Download our institutional dossier and review the full curriculum details, including session breakdowns and technical modules.
            </p>
          </div>

          <Link href="/about-wisdom" className="group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="px-10 py-8 bg-slate-900 rounded-[2.5rem] text-white flex items-center gap-8 shadow-xl"
            >
              <div>
                <GraduationCap size={40} className="text-emerald-400 mb-4" />
                <p className="text-2xl font-semibold">View The Dossier</p>
              </div>
              <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}