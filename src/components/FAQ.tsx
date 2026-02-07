"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, HelpCircle, Minus } from "lucide-react";

const faqs = [
  {
    id: "PROT-01",
    question: "Do I need prior experience to join?",
    answer: "No. Our curriculum is designed to strip away retail bias. We provide a tiered evolutionary path: Foundation, Professional, and Mastery protocols.",
  },
  {
    id: "PROT-02",
    question: "The Wealth Wisdom differentiation?",
    answer: "We bypass lagging indicators. Our methodology focuses on Institutional Order Flow and mechanical edge—learning the 'Why' behind every market expansion.",
  },
  {
    id: "PROT-03",
    question: "Post-Syllabus support infrastructure?",
    answer: "Education is permanent. Graduates receive floor access to our private Discord for real-time market bias, weekly analysis, and monthly briefings.",
  },
  {
    id: "PROT-04",
    question: "Targeted market segments?",
    answer: "Price action is universal. Our mechanical frameworks are applied with high precision across Equity, F&O, Commodities, and global Forex markets.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#F7FCF9] py-24 lg:py-40 relative overflow-hidden border-t border-emerald-100/50">
      
      {/* Structural Background Detail */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none hidden lg:block">
        <h1 className="text-[12rem] font-black leading-none tracking-tighter">F.A.Q</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER: Editorial Style */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <Minus className="text-emerald-500" />
              <span className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Inquiry Terminal</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.85]">
              Common <br />
              <span className="italic font-serif text-emerald-600/70">Curiosities.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-emerald-100 pl-8 pb-4">
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-[240px]">
              Clarity on institutional protocols and your evolutionary path.
            </p>
          </div>
        </div>

        {/* ACCORDION: Blueprint Layout */}
        <div className="max-w-5xl ml-auto">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-t ${i === faqs.length - 1 ? 'border-b' : ''} border-emerald-100/50 group`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-12 flex items-start justify-between text-left transition-all duration-500"
              >
                <div className="flex gap-12 md:gap-24">
                  <span className={`font-mono text-[10px] pt-2 transition-colors duration-500 ${
                    openIndex === i ? "text-emerald-500" : "text-slate-300"
                  }`}>
                    {faq.id}
                  </span>
                  <h3 className={`text-2xl md:text-4xl font-bold tracking-tight transition-all duration-500 ${
                    openIndex === i ? "text-slate-900 translate-x-4" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                
                <div className={`mt-2 transition-all duration-700 ${
                  openIndex === i ? "rotate-45 text-emerald-500" : "text-slate-200 group-hover:text-emerald-300"
                }`}>
                  <ArrowUpRight size={32} strokeWidth={1} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                    animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                    exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-16 pl-16 md:pl-[11.5rem] max-w-3xl relative">
                      {/* Vertical line accent for the answer */}
                      <div className="absolute left-12 md:left-[10rem] top-0 bottom-16 w-px bg-emerald-100" />
                      
                      <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light italic font-serif">
                        "{faq.answer}"
                      </p>
                      
                      <div className="mt-8 flex gap-2">
                        <div className="h-1 w-6 bg-emerald-500 rounded-full" />
                        <div className="h-1 w-1 bg-emerald-200 rounded-full" />
                        <div className="h-1 w-1 bg-emerald-100 rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MINT CALL-TO-ACTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-10 bg-white border border-emerald-100 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="h-14 w-14 bg-[#F7FCF9] rounded-2xl flex items-center justify-center text-emerald-600">
               <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 tracking-tight">Seeking Further Clarity?</h4>
              <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] mt-1">Institutional Support Desk</p>
            </div>
          </div>
          
          <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:bg-emerald-600 transition-all flex items-center gap-4 group">
            Consult a Mentor <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}