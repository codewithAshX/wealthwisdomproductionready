"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#F7FCF9] text-[#1a1a1a] selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[11px] font-bold tracking-[0.4em] text-emerald-700 uppercase"
          >
            Our Legacy
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[0.9] text-slate-900"
          >
            The Discipline of <br />
            <span className="text-emerald-600">Wealth Creation.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-slate-500 font-normal tracking-tight"
          >
            <p>
              Wealth Wisdom Trading Academy is a sanctuary for serious traders. 
              We transform market volatility into <span className="text-emerald-700 font-semibold">structured opportunity</span> through elite mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO GRID ================= */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            
            <motion.div 
              {...fadeInUp}
              className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-slate-900">Our Mission</h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md font-normal">
                To simplify the complexities of price action through immersive, 
                rule-based systems that prioritize capital protection over speculation.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-5 relative h-[350px] md:h-auto rounded-[2.5rem] overflow-hidden border border-emerald-100 shadow-xl"
            >
              <Image
                src="/classroom.png"
                alt="Academy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="md:col-span-12 group relative overflow-hidden rounded-[2.5rem] bg-emerald-600 p-12 text-white shadow-2xl shadow-emerald-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 tracking-tight">
                    <Eye size={32} /> Our Vision
                  </h2>
                  <p className="text-emerald-50 text-xl font-medium leading-relaxed tracking-tight">
                    To build a community of 100,000+ disciplined traders who master 
                    the markets using data-driven psychology rather than luck.
                  </p>
                </div>
                <div className="hidden md:block">
                   <div className="h-24 w-24 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                      <CheckCircle2 size={40} />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE STRIP ================= */}
      <section className="py-24 bg-[#EBF5EF]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Quote size={48} className="mx-auto mb-8 text-emerald-600 opacity-40" />
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter text-slate-800">
            "Trading is not a game of <span className="text-emerald-600 italic font-serif">prediction</span>, <br className="hidden md:block"/> 
            it is a game of <span className="underline decoration-emerald-400 underline-offset-8">probability</span>."
          </h2>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <Image
                    src="/classroom.png" 
                    alt="Palash Bandiwar"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 mb-1">Founder & Head Mentor</p>
                <p className="text-2xl font-extrabold tracking-tight">Palash Bandiwar</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-emerald-600 font-bold text-xs tracking-[0.3em] mb-4 block uppercase">The Architect</span>
              <h2 className="text-5xl font-extrabold mb-8 text-slate-900 tracking-tighter leading-none">Empowering the <br/><span className="text-emerald-600">Retail Trader.</span></h2>
              
              <div className="space-y-6 text-slate-500 text-lg font-normal leading-relaxed tracking-tight">
                <p>
                  With over a decade of market mastery, Palash Bandiwar founded Wealth Wisdom 
                  to bridge the gap between textbook theory and the high-stakes reality of live trading.
                </p>
                <p className="border-l-4 border-emerald-500 pl-6 italic text-slate-800 font-medium bg-emerald-50/50 py-5 rounded-r-xl">
                  "I don't teach you how to follow trends. I teach you how to read the 
                  intent behind the price."
                </p>
                <button className="flex items-center gap-2 text-emerald-700 font-bold group mt-8 hover:text-emerald-500 transition-colors tracking-tight">
                  Read Palash's Story <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}