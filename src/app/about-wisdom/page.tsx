"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Fingerprint, Target, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function MasterDossier() {
  return (
    <main className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      
      {/* MINIMAL NAVIGATION */}
      <nav className="p-8 flex justify-between items-center border-b border-slate-50">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">
          <ArrowLeft size={16} /> Return to Terminal
        </Link>
        <span className="text-[10px] font-mono text-slate-300">REF // WW-DOSSIER-2026</span>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-emerald-600 font-mono text-xs tracking-[0.5em] uppercase block mb-8"
        >
          Confidential Dossier
        </motion.span>
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-12">
          Deconstructing <br /> 
          <span className="italic font-serif text-emerald-600/80">Wealth Wisdom.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl">
          An in-depth look into the mechanical frameworks, psychological protocols, and institutional heritage that define our trading sanctuary.
        </p>
      </section>

      {/* CORE PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          
          {/* Methodology */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Fingerprint size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">The Mechanical Edge</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We reject the "signals" culture. Our students learn to read raw price action through the lens of institutional liquidity. By identifying where global banks are positioning, we enter trades with mathematical precision rather than emotional hope.
            </p>
          </div>

          {/* Psychology */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Psychological Fortitude</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Trading is 20% strategy and 80% mindset. We utilize proprietary performance tracking to identify your cognitive biases. Our "Mindset Lab" ensures you execute your edge without hesitation or greed.
            </p>
          </div>

          {/* Capital */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Institutional Path</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our ultimate goal is capital management. High-performing graduates are mentored for prop-firm evaluations and private capital backing, transitioning from retail traders to professional fund managers.
            </p>
          </div>

        </div>
      </section>

      {/* FULL WIDTH IMAGE / QUOTE */}
      <section className="py-24 bg-[#F7FCF9]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-slate-800 leading-snug max-w-4xl mx-auto">
            "We don't predict markets. We follow the footsteps of giants and wait for the highest probability of execution."
          </blockquote>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-600 font-bold">— Founding Principle</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Evolve?</h2>
        <Link href="/#courses">
          <button className="px-12 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-emerald-600 transition-all">
            Secure Your Seat
          </button>
        </Link>
      </section>

    </main>
  );
}