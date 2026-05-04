"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Quote, Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Homeowner",
    text: "Venula delivered our home exactly as promised — on time, with exceptional craftsmanship.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Aditya Singh",
    role: "Business Owner",
    text: "From design to execution, everything was handled seamlessly. Truly professional.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    name: "Priya Patel",
    role: "Investor",
    text: "Clear communication and quality control made this a stress-free investment experience.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    name: "Sanjay Rao",
    role: "Architect",
    text: "Their attention to detail and structural discipline is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f7e74",
  },
];

const loopItems = [...testimonials, ...testimonials];

function Card({ t }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      className="min-w-[340px] max-w-[340px]"
    >
      {/* GLASS CARD */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-yellow-400/40 via-white/10 to-transparent">

        {/* SOFT GLOW (NOT BOX) */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent blur-2xl opacity-60" />

        <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 overflow-hidden">

          {/* LIGHT SWEEP EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

          <Quote className="text-yellow-400 mb-4" size={22} />

          <p className="text-white/70 text-sm leading-relaxed mb-6">
            “{t.text}”
          </p>

          {/* STARS */}
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-3">
            <img
              src={`${t.image}?auto=format&fit=crop&w=200&q=80`}
              className="h-11 w-11 rounded-full object-cover border border-white/20"
            />

            <div>
              <div className="flex items-center gap-1">
                <p className="text-white text-sm font-medium">{t.name}</p>
                <BadgeCheck size={14} className="text-yellow-400" />
              </div>
              <p className="text-white/40 text-xs">{t.role}</p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#050507] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW (REMOVES BOX FEEL) */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Client <span className="text-yellow-400">Experiences</span>
          </h2>
          <p className="text-white/40 mt-4">
            Real stories from people who trusted Venula
          </p>
        </div>

        {/* FLOATING SCROLL (NO BOX CONTAINER) */}
        <div className="relative">

          {/* EDGE FADE */}
          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#050507] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#050507] to-transparent z-10" />

          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {loopItems.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}