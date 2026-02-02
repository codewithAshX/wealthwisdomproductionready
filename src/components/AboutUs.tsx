"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, GraduationCap, ArrowRight } from "lucide-react";

const stats = [
  { label: "Active Students", value: "5,000+", icon: <Users className="w-5 h-5" /> },
  { label: "Success Rate", value: "92%", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Years Experience", value: "10+", icon: <ShieldCheck className="w-5 h-5" /> },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F7FCF9] py-24 md:py-32 text-slate-900">
      
      {/* BACKGROUND ELEMENTS - Mint White Theme Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* LEFT – VISUAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image with Apple-style Border */}
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white p-3 shadow-2xl shadow-emerald-500/5">
              <img
                src="/classroom.png"
                alt="Academy"
                className="rounded-[2rem] w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 z-20 hidden lg:block"
            >
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-500/10 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                    <GraduationCap />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Certified by</p>
                    <p className="font-extrabold text-slate-900 text-lg tracking-tight">Wealth Wisdom</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Grid Pattern */}
            <div className="absolute -top-10 -left-10 h-40 w-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]" />
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-emerald-700 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Our Philosophy
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-[0.9] text-slate-900 md:text-5xl lg:text-7xl tracking-tighter">
              India’s Premier <br />
              <span className="text-emerald-600">
                Trading Sanctuary.
              </span>
            </h2>

            <p className="mt-8 text-lg text-slate-500 leading-relaxed font-normal tracking-tight max-w-xl">
              Wealth Wisdom Trading Academy isn't just a school; it's a launchpad for the next generation of 
              <span className="text-slate-900 font-bold"> disciplined market masters.</span> We strip away the noise 
              and focus on what actually moves the needle: psychology and risk.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-y border-emerald-100 py-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1 justify-center md:justify-start">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-emerald-600 px-10 py-5 font-black text-xs uppercase tracking-widest text-white shadow-xl shadow-emerald-200 transition-all hover:bg-emerald-700 flex items-center justify-center gap-2"
              >
                Explore Courses <ArrowRight size={16} />
              </motion.button>
              
              <button className="rounded-full border border-emerald-100 bg-white px-10 py-5 font-bold text-xs uppercase tracking-widest text-slate-600 transition-all hover:bg-emerald-50">
                View Our History
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}