"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Shield,
  Building2,
  Users,
  Ruler,
  Star,
} from "lucide-react";

/* ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <div className="bg-[#050507] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[140px]" />

      {/* 🎬 HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        {/* IMAGE + VIDEO LAYER */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-modern-city-1576/1080p.mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-light mb-6">
            Building <span className="text-amber-400">Trust</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/70 text-lg">
            Premium developments crafted for modern living and long-term value.
          </motion.p>
        </motion.div>
      </section>

      {/* 🧾 ABOUT */}
      <section className="py-28 px-6 bg-[#f7f7f7] text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="bg-[#0b0b0c] text-white rounded-3xl p-10 md:p-14 border border-amber-400/40 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-amber-400 font-light">
              Who We Are
            </h2>

            <p className="text-white/80 leading-relaxed text-lg">
              At <span className="text-amber-400 font-semibold">Venula Developers</span>, we create premium real estate opportunities built on trust,
              transparency, and long-term value. Every project is carefully designed
              to deliver both lifestyle and investment growth.

              <br /><br />

              From residential layouts to high-growth developments, we ensure legal clarity,
              quality execution, and customer-first service in every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 📊 ACHIEVEMENTS */}
      <section className="relative py-28 px-6 bg-[#050507]">

        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px]" />

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="text-amber-400">Achievements</span>
          </h2>

          <p className="text-white/60 mb-16 max-w-2xl mx-auto">
            Delivering consistent value through premium developments and trusted relationships.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { value: "30+", label: "Projects", icon: <Building2 /> },
              { value: "1000+", label: "Families", icon: <Users /> },
              { value: "25", label: "Acres", icon: <Ruler /> },
              { value: "100%", label: "Satisfaction", icon: <Star /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-amber-400/30 to-transparent"
              >
                <div className="bg-[#0b0b0c] rounded-2xl p-8 border border-white/10">
                  <div className="text-amber-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-semibold text-amber-400">
                    {item.value}
                  </h3>

                  <p className="text-white/50 text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 👨‍💼 FOUNDERS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">
            Leadership That Builds <span className="text-amber-400">Trust</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {[
              {
                name: "CH Reena Kumar",
                role: "Founder & Chairman",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
              },
              {
                name: "Ranjith Shekar",
                role: "Co-Founder & COO",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={`${p.img}?auto=format&fit=crop&w=800&q=80`}
                  className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl text-amber-400">{p.name}</h3>
                  <p className="text-white/60 text-sm">{p.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 MISSION / VISION */}
      <section className="py-28 px-6 bg-[#0f0f12]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            { title: "Mission", icon: <Target />, text: "Deliver quality real estate with transparency." },
            { title: "Vision", icon: <Eye />, text: "Build future-ready communities." },
            { title: "Values", icon: <Shield />, text: "Integrity, Quality, Customer First." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/[0.04] border border-white/10 p-10 rounded-3xl text-center"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl mb-6">
          Let’s Build Your <span className="text-amber-400">Future</span>
        </h2>

        <button className="px-10 py-4 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-400 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
}