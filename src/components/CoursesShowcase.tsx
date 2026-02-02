"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, BarChart3, Target, GraduationCap } from "lucide-react";
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
    <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full w-fit border border-red-100/50">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>
      <span className="text-[10px] font-bold uppercase tracking-tight text-red-600">
        Limited Space: {seats} Seats Left
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
      className="group relative bg-white rounded-[2.5rem] p-4 shadow-sm border border-slate-100 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      {/* IMAGE - High Contrast Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] mb-6 bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3">
          <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
            {course.icon} {course.badge}
          </span>
        </div>
      </div>

      {/* TEXT CONTENT - Slate-900 for max legibility */}
      <div className="px-2 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter ml-2">Premium Content</span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-tight mb-3 group-hover:text-emerald-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 line-clamp-2">
          {course.desc}
        </p>

        {/* PRICE SECTION */}
        <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
          <div>
            <span className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Tuition</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tighter">{course.price}</span>
              <span className="text-sm line-through text-slate-300 font-bold">{course.oldPrice}</span>
            </div>
          </div>
          
          <div className="h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500">
            <ArrowRight size={22} />
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
    title: "Supply & Demand",
    desc: "Master the institutional zones where the big players enter the market.",
    image: "https://images.unsplash.com/photo-1611974714603-3555366b3a30?auto=format&fit=crop&q=80&w=800",
    price: "₹25,000",
    oldPrice: "₹35,000",
    badge: "Flagship",
    icon: <Target size={12} />
  },
  {
    title: "Options Delta Pro",
    desc: "Strategic hedging and non-directional income generation for any market.",
    image: "https://images.unsplash.com/photo-1642790103517-18129f55c531?auto=format&fit=crop&q=80&w=800",
    price: "₹25,000",
    oldPrice: "₹35,000",
    badge: "Advanced",
    icon: <BarChart3 size={12} />
  },
  {
    title: "Elite Mentorship",
    desc: "Live 1-on-1 guidance with direct floor access and private trading community.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    price: "₹10,000",
    oldPrice: "₹20,000",
    badge: "Exclusive",
    icon: <GraduationCap size={12} />
  },
];

/* ---------------- MAIN COMPONENT ---------------- */
export default function CoursesShowcase() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section id="courses" className="bg-[#F7FCF9] py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="uppercase tracking-[0.4em] text-emerald-600 text-[10px] font-black bg-emerald-50 px-3 py-1 rounded-md"
              >
                Premier Education
              </motion.span>
              <h2 className="mt-4 text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                Professional <br /> <span className="text-emerald-600">Trading Curriculum.</span>
              </h2>
            </div>
            
            <div className="bg-white p-5 rounded-3xl border border-emerald-100 flex items-center gap-4 shadow-sm w-fit">
                <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <p className="text-sm font-black text-slate-900 leading-none">ISO 9001 Certified</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Academy</p>
                </div>
            </div>
          </div>

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.title}
                course={course}
                delay={index}
                onClick={() => setSelected(course)}
              />
            ))}
          </div>

        </div>
      </section>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </>
  );
}