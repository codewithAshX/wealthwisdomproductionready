"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, TrendingUp, Zap, Crown } from "lucide-react";
import CourseModal from "@/components/CourseModal";

/* ---------------- SEAT COUNTER ---------------- */
function SeatCounter() {
  const [seats, setSeats] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeats((prev) => (prev > 5 ? prev - 1 : prev));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg w-fit border border-emerald-100/50">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
      </div>
      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
        Live: {seats} Seats Remaining
      </span>
    </div>
  );
}

/* ---------------- COURSE CARD ---------------- */
function CourseCard({ course, onClick, delay }: { course: any; onClick: () => void; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      {/* IMAGE CONTAINER - Optimized Aspect Ratio */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] text-slate-900 shadow-sm flex items-center gap-2">
            {course.icon} {course.badge}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-emerald-500 text-emerald-500" />
          ))}
          <span className="text-[10px] font-bold text-slate-400 ml-2 uppercase tracking-tighter">Verified Result</span>
        </div>

        <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-2 group-hover:text-emerald-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 mb-4">
          {course.desc}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900">
                {course.price}
              </span>
              <span className="text-xs line-through text-slate-300 font-bold">
                {course.oldPrice}
              </span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center transition-all duration-300 group-hover:rounded-full group-hover:shadow-lg group-hover:shadow-emerald-200">
             <ArrowRight size={18} />
          </div>
        </div>

        <SeatCounter />
      </div>
    </motion.div>
  );
}

/* ---------------- DATA ---------------- */
const courses = [
  {
    title: "Supply & Demand – Live",
    desc: "Institutional price action strategies focused on high-probability zone identification.",
    image: "https://images.unsplash.com/photo-1611974714603-3555366b3a30?auto=format&fit=crop&q=80&w=800",
    price: "₹25,000",
    oldPrice: "₹35,000",
    badge: "Flagship",
    icon: <TrendingUp size={12} />
  },
  {
    title: "Options Delta Mastery",
    desc: "Advanced options Greeks and non-directional hedging for consistent monthly cashflow.",
    image: "https://images.unsplash.com/photo-1642790103517-18129f55c531?auto=format&fit=crop&q=80&w=800",
    price: "₹25,000",
    oldPrice: "₹35,000",
    badge: "Pro Level",
    icon: <Zap size={12} />
  },
  {
    title: "Elite Mentorship 2.0",
    desc: "Personalized 1-on-1 path to becoming a full-time trader with direct floor access.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    price: "₹10,000",
    oldPrice: "₹20,000",
    badge: "Exclusive",
    icon: <Crown size={12} />
  },
];

/* ---------------- MAIN COMPONENT ---------------- */
export default function CoursesShowcase() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section id="courses" className="bg-[#F7FCF9] py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-6">
            <div className="max-w-xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[0.3em] text-emerald-600 text-[10px] font-black bg-emerald-50 px-3 py-1 rounded-md"
              >
                Curriculum 2024
              </motion.span>
              <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.9]">
                Master the <br /> <span className="text-emerald-600">Trading Floor.</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white border border-emerald-100 rounded-2xl shadow-sm w-fit">
                <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={20} />
                </div>
                <div>
                    <p className="text-xs font-black text-slate-900 leading-none">ISO 9001 Certified</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Institutional Standards</p>
                </div>
            </div>
          </div>

          {/* DESKTOP GRID & MOBILE SLIDER */}
          {/* On mobile (< 768px): Uses snap-scroll for performance 
              On desktop (> 768px): Uses a clean 3-column grid
          */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 no-scrollbar">
            {courses.map((course, index) => (
              <div key={course.title} className="min-w-[85vw] md:min-w-full snap-center first:ml-0">
                <CourseCard
                  course={course}
                  delay={index}
                  onClick={() => setSelected(course)}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </>
  );
}