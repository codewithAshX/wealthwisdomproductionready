"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Bell,
  Briefcase,
  Download,
  Youtube,
  Award,
} from "lucide-react";

const stats = [
  { icon: Award, value: "5 Lakh+", label: "Certified Traders" },
  { icon: Youtube, value: "70 Lakh+", label: "YouTube Family" },
  { icon: Bell, value: "1.8M+", label: "Market Followers" },
  { icon: Users, value: "30K+", label: "Trader Community" },
  { icon: Download, value: "5 Lakh+", label: "App Downloads" },
  { icon: Briefcase, value: "35+", label: "Expert Team" },
];

export default function StatsSuperhero() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Matching Background Blobs from Timeline section */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header - Styled to match "How It Works" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-600 font-mono text-xs tracking-[0.4em] uppercase mb-4 block"
            >
              Network Strength
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.85]">
              Our impact, <br />
              <span className="italic font-serif text-emerald-600/80">in numbers.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-slate-400 max-w-[280px] text-xs uppercase tracking-widest leading-relaxed border-r-0 md:border-r border-emerald-100 pr-0 md:pr-6 ml-auto">
              Building the most disciplined trading community in the nation.
            </p>
          </div>
        </div>

        {/* The Grid - Architectural & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-12 border-b border-r border-slate-100 transition-colors duration-500 hover:bg-emerald-50/30"
              >
                {/* Hover Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-slate-300 group-hover:text-emerald-500 transition-colors duration-500">
                      <Icon size={32} strokeWidth={1} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-300 tracking-[0.3em]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
                      {item.value}
                    </h3>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                      {item.label}
                    </p>
                  </div>

                  {/* Aesthetic Corner Accent */}
                  <div className="absolute bottom-4 right-4 h-1 w-1 bg-slate-200 group-hover:bg-emerald-400 group-hover:scale-[3] transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Quote or Sub-branding */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="px-6 py-2 rounded-full border border-slate-100 bg-white shadow-sm flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Join the 1% Elite Traders
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}