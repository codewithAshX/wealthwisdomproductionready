"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Calculator, LineChart, Calendar, Zap, Menu, X, ArrowRight } from "lucide-react";

const toolItems = [
  { 
    label: "Risk Calculator", 
    icon: <Calculator size={16} />, 
    href: "/tools/risk-calculator", 
    desc: "Size positions like a pro" 
  },
  { 
    label: "Position Size Calculator", 
    icon: <LineChart size={16} />, 
    href: "/tools/position-size-calculator", 
    desc: "Project your compound growth" 
  },
  { 
    label: "Economic Calendar", 
    icon: <Calendar size={16} />, 
    href: "/tools/economic-calendar",   // ✅ FIXED PATH
    desc: "High-impact news alerts" 
  },
  // { 
  //   label: "Quick Analysis", 
  //   icon: <Zap size={16} />, 
  //   href: "/tools/analysis", 
  //   desc: "AI market sentiment" 
  // },
];


const sections = [
  { id: "hero", label: "Home", type: "scroll" },
  { id: "about", label: "About", type: "scroll" },
  { id: "courses", label: "Courses", type: "scroll" },
  { id: "/gallery", label: "Gallery", type: "route" },
];

export default function Navbar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleNavigation = (item: any) => {
    setMenuOpen(false);
    if (item.type === "route") {
      router.push(item.id);
    } else {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else router.push(`/#${item.id}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 ${
          scrolled ? "pt-4" : "pt-8"
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-[2rem] ${
            scrolled 
            ? "bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-[0_8px_32px_rgba(16,185,129,0.08)]" 
            : "bg-transparent"
          }`}
        >
          
          {/* LOGO */}
          <div onClick={() => router.push("/")} className="cursor-pointer relative z-[70] flex items-center gap-2">
            <Image
              src="/WW2.PNG"
              alt="Logo"
              width={140}
              height={36}
              priority
              className={`w-auto transition-all duration-500 ${scrolled ? "h-7" : "h-10"}`}
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="px-5 py-2 text-[13px] font-bold text-slate-500 hover:text-emerald-600 transition-all tracking-tight"
              >
                {item.label}
              </button>
            ))}

            {/* TOOLS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button className={`flex items-center gap-1.5 px-5 py-2 text-[13px] font-bold transition-all ${toolsOpen ? "text-emerald-600" : "text-slate-500"}`}>
                Tools <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${toolsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] pt-4"
                  >
                    <div className="bg-white border border-emerald-100 rounded-[2rem] overflow-hidden shadow-2xl p-3">
                      <div className="grid gap-2">
                        {toolItems.map((tool) => (
                          <button
                            key={tool.label}
                            onClick={() => router.push(tool.href)}
                            className="flex items-center gap-4 w-full p-4 rounded-[1.2rem] hover:bg-emerald-50 transition-all text-left group"
                          >
                            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                              {tool.icon}
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-slate-900 leading-none">{tool.label}</div>
                              <div className="text-[10px] text-slate-400 mt-1 font-medium tracking-tight leading-tight">{tool.desc}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="bg-emerald-600 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center gap-2"
            >
              Join Academy <ArrowRight size={14} />
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 rounded-xl bg-emerald-50 text-emerald-600"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8 pt-28 gap-8"
          >
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold text-emerald-600 tracking-[0.3em] uppercase">Navigation</p>
              {sections.map((item) => (
                <button 
                  key={item.label} 
                  onClick={() => handleNavigation(item)} 
                  className="text-4xl font-black text-slate-900 text-left tracking-tighter hover:text-emerald-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-emerald-50 pt-8 mt-auto">
              <p className="text-slate-400 mb-6 uppercase text-[10px] font-bold tracking-[0.3em]">Trader Ecosystem</p>
              <div className="grid grid-cols-1 gap-3">
                {toolItems.map((tool) => (
                  <button key={tool.label} className="p-4 rounded-2xl bg-[#F7FCF9] border border-emerald-50 text-slate-900 text-left flex items-center gap-4 font-bold tracking-tight">
                    <div className="p-2 bg-white rounded-lg text-emerald-600 shadow-sm">{tool.icon}</div> 
                    {tool.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}