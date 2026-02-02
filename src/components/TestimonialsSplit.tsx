"use client";

import { motion } from "framer-motion";
import { Quote, MessageSquare, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Full-Time Trader",
    text: "Before joining, I was randomly taking trades and constantly losing. The structured approach completely changed my mindset. Now I trade with confidence and consistency.",
    image: "/testimonials/t1.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "Working Professional",
    text: "I never thought trading could be this systematic. The risk management framework alone saved me from huge losses.",
    image: "/testimonials/t2.jpg",
  },
  {
    name: "Rahul Jain",
    role: "Beginner → Profitable",
    text: "This mentorship removed years of confusion in just months. The live market sessions are pure gold.",
    image: "/testimonials/t3.jpg",
  },
  {
    name: "Sneha Mehta",
    role: "Options Trader",
    text: "No hype. No shortcuts. Just real education. Easily the best decision of my trading journey.",
    image: "/testimonials/t4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-[#F7FCF9] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="relative z-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-emerald-600 mb-4 font-bold tracking-[0.3em] text-[10px] uppercase"
          >
            <MessageSquare size={14} />
            Real Stories
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.9]">
            Traders Who <br />
            <span className="text-emerald-600">Found Their Edge.</span>
          </h2>

          <p className="text-slate-500 mt-6 text-lg max-w-xl font-normal leading-relaxed tracking-tight">
            Real transformations from disciplined traders who moved beyond 
            guesswork to professional execution.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-emerald-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-emerald-100 group-hover:text-emerald-500 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              <p className="relative z-10 text-slate-600 leading-relaxed font-normal text-md mb-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-emerald-50 pt-6">
                <div className="h-12 w-12 rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 tracking-tight text-sm">{t.name}</p>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CTA CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 relative overflow-hidden rounded-[3rem] bg-emerald-600 p-12 md:p-16 text-white shadow-2xl shadow-emerald-200"
        >
          {/* Abstract background shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none mb-6">
                Ready to Transform <br /> Your Trading?
              </h3>
              <p className="text-emerald-50 text-lg font-light tracking-tight opacity-80">
                Join a community of 500+ traders mastering the markets through wisdom and discipline.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/91XXXXXXXX"
              className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-emerald-600 font-black text-sm uppercase tracking-widest shadow-xl transition-all"
            >
              Join The Community <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}