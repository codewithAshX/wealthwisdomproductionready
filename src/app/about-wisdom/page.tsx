"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Fingerprint, Target, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function MasterDossier() {
  return (
    <main className="bg-black min-h-screen font-sans text-white pb-20">
      
      {/* MINIMAL NAVIGATION */}
      <nav className="p-8 flex justify-between items-center border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-yellow-400 transition-colors">
          <ArrowLeft size={16} /> Return to Home
        </Link>
        <span className="text-[10px] font-mono text-slate-400">REF // VENULA-PORTFOLIO-2026</span>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-yellow-400 font-mono text-xs tracking-[0.5em] uppercase block mb-8"
        >
          Project Dossier
        </motion.span>
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-12">
          Deconstructing <br /> 
          <span className="italic font-serif text-yellow-400/80">Venula Developers.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
          An inside look into the systems, standards, and craft that drive our most impactful projects.
        </p>
      </section>

      {/* CORE PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          
          {/* Methodology */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-yellow-400/20 flex items-center justify-center text-yellow-400">
              <Fingerprint size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">The Structural Edge</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We prioritize proven processes over trends. Our teams build with precision, ensuring every decision supports long-term performance.
            </p>
          </div>

          {/* Psychology */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-yellow-400/20 flex items-center justify-center text-yellow-400">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Process Discipline</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Great builds are won in the details. We track progress, manage risks, and keep teams aligned through transparent systems.
            </p>
          </div>

          {/* Capital */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-yellow-400/20 flex items-center justify-center text-yellow-400">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Operational Excellence</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We focus on consistent execution. Every project is managed with rigor to deliver on time, on budget, and with unwavering quality.
            </p>
          </div>

        </div>
      </section>

      {/* FULL WIDTH IMAGE / QUOTE */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-snug max-w-4xl mx-auto">
            "We don't guess outcomes. We build certainty into every phase and deliver results that stand the test of time."
          </blockquote>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-yellow-400 font-bold">— Founding Principle</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Build?</h2>
        <Link href="/#services">
          <button className="px-12 py-6 bg-yellow-400 text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-yellow-300 transition-all">
            Request a Quote
          </button>
        </Link>
      </section>

    </main>
  );
}