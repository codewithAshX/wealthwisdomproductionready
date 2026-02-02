"use client";

import { motion } from "framer-motion";
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
  { icon: Bell, value: "1.8M+", label: "Market Followers" },
  { icon: Briefcase, value: "35+", label: "Expert Team" },
  { icon: Users, value: "30K+", label: "Trader Community" },
  { icon: Youtube, value: "70 Lakh+", label: "YouTube Family" },
  { icon: Download, value: "5 Lakh+", label: "App Downloads" },
];

export default function StatsSuperhero() {
  return (
    <section className="bg-[#F7FCF9] py-32 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.4em] text-emerald-600 font-bold uppercase mb-4"
          >
            Our Impact in Numbers
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-none">
            You Made Us A <span className="text-emerald-600">Superhero.</span>
          </h2>
          <p className="mt-6 text-slate-500 font-normal max-w-2xl mx-auto tracking-tight">
            The overwhelming support from our trading family drives us to deliver the most disciplined price action education in India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1] 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#ffffff",
                  borderColor: "#10b981"
                }}
                className="flex items-center gap-5 rounded-[2rem] bg-white/60 backdrop-blur-sm px-8 py-5 shadow-sm border border-emerald-100/50 transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                  <Icon size={24} strokeWidth={2.5} />
                </div>

                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter leading-tight">
                    {item.value}
                  </p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
    </section>
  );
}