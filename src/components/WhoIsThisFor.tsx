"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Home, Globe, ArrowRight } from "lucide-react";

const audiences = [
  {
    id: "professionals",
    title: "Working Professionals",
    icon: <Briefcase size={20} />,
    desc: "Generate high-probability passive income alongside your career by mastering institutional demand zones.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "housewives",
    title: "Homemakers",
    icon: <Home size={20} />,
    desc: "Gain financial independence from home. Learn to identify market trends and make confident investment decisions.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "business",
    title: "Business Owners",
    icon: <Globe size={20} />,
    desc: "Master valuation and risk management to optimize your business capital and build long-term personal wealth.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhoIsThisFor() {
  const [active, setActive] = useState(audiences[0]);

  return (
    <section className="bg-[#F7FCF9] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-bold tracking-[0.4em] text-emerald-600 uppercase mb-4"
          >
            Tailored Excellence
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-none">
            Is This Mentorship <br />
            <span className="text-emerald-600">Right For You?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* INTERACTIVE CONTENT CARDS (LEFT) */}
          <div className="lg:col-span-5 space-y-4">
            {audiences.map((item) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActive(item)}
                className={`relative cursor-pointer rounded-[2rem] p-8 transition-all duration-500 border ${
                  active.id === item.id
                    ? "bg-white border-emerald-100 shadow-xl shadow-emerald-500/5 translate-x-4"
                    : "bg-transparent border-transparent grayscale opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`mt-1 p-3 rounded-2xl transition-colors duration-500 ${
                    active.id === item.id ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-600"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-extrabold tracking-tight transition-colors duration-500 ${
                      active.id === item.id ? "text-slate-900" : "text-slate-500"
                    }`}>
                      {item.title}
                    </h3>
                    <AnimatePresence mode="wait">
                      {active.id === item.id && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 text-slate-500 text-sm leading-relaxed font-normal tracking-tight"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {active.id === item.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-emerald-600 rounded-full" 
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* DYNAMIC IMAGE PANEL (RIGHT) */}
          <div className="lg:col-span-7 relative h-[500px] w-full group">
            <div className="absolute inset-0 bg-emerald-600/10 rounded-[3rem] rotate-3 scale-95 blur-2xl" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative h-full w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 mb-2">Ideal Profile</p>
                  <h4 className="text-3xl font-bold tracking-tight">{active.title}</h4>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-emerald-50 hidden md:block"
            >
              <div className="text-emerald-600 font-black text-2xl tracking-tighter">100%</div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Practical Focus</p>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 text-slate-900 font-bold group">
            <span className="h-px w-12 bg-emerald-600 group-hover:w-20 transition-all" />
            Find your path in the markets
            <ArrowRight size={20} className="text-emerald-600 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}