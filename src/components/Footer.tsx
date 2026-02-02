"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F7FCF9] pt-24 pb-12 overflow-hidden border-t border-emerald-100">
      
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-1 space-y-6">
            <div className="relative w-40 h-20">
              <Image
                src="/WW2.PNG"
                alt="Wealth Wisdom Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-normal tracking-tight">
              India's premier trading sanctuary. We transform market volatility into calculated opportunity through elite mentorship and discipline.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-[0.3em] mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Home", "Why Us", "Courses", "Tools", "About Us"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-500 hover:text-emerald-600 text-sm font-medium transition-colors flex items-center group">
                    {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* UTILITIES */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-[0.3em] mb-8">
              Calculators
            </h4>
            <ul className="space-y-4">
              {["Risk Calculator", "Profit Simulator", "Position Sizing", "Economic Calendar"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-emerald-600 text-sm font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO CARD */}
          <div className="bg-white p-8 rounded-[2rem] border border-emerald-100 shadow-sm">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-[0.3em] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="group">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Phone</p>
                <p className="text-slate-900 font-bold tracking-tight hover:text-emerald-600 transition-colors">+91 XXXXX XXXXX</p>
              </div>
              <div className="group">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Email</p>
                <p className="text-slate-900 font-bold tracking-tight hover:text-emerald-600 transition-colors">hello@wealthwisdom.com</p>
              </div>
              <div className="pt-4">
                <button className="w-full py-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all">
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-emerald-100/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-xs font-normal">
                © {currentYear} Wealth Wisdom Trading Academy. All rights reserved.
              </p>
              <p className="mt-2 text-[10px] text-slate-400 max-w-2xl leading-relaxed italic">
                Disclaimer: Trading in stock markets involves risk. Past performance does not guarantee future results. Education purposes only.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                Designed & Developed By
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-900 font-black text-sm tracking-tighter">
                  CodewithAshX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}