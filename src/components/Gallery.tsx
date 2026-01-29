"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* 🔥 Ultra premium images */
const images = [
  {
    src: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1800&auto=format&fit=crop",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1800&auto=format&fit=crop",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1800&auto=format&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-36 overflow-hidden bg-gradient-to-b from-[#ecfdf5] via-white to-[#f0fdfa]">

      {/* MINT AMBIENT BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[140px] opacity-40"/>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-teal-200 rounded-full blur-[140px] opacity-40"/>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HERO HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">
            A Look Inside
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Wealth Wisdom
            </span>
          </h1>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Where disciplined traders are built, strategies are refined,
            and financial independence begins.
          </p>
        </motion.div>

        {/* ================= EDITORIAL GRID ================= */}

        <div className="grid md:grid-cols-3 gap-10">

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className={`group relative ${
                img.large ? "md:col-span-2" : ""
              }`}
            >
              {/* GLASS CARD */}
              <div className="
                relative
                rounded-[28px]
                overflow-hidden
                backdrop-blur-xl
                bg-white/60
                border border-white/40
                shadow-[0_30px_80px_rgba(16,185,129,0.15)]
              ">

                <Image
                  src={img.src}
                  alt="Trading gallery"
                  width={1600}
                  height={1000}
                  className="
                    object-cover
                    w-full
                    h-[340px]
                    md:h-[420px]
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* MINT OVERLAY */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-emerald-900/20
                  via-transparent
                  to-transparent
                  opacity-60
                " />

                {/* HOVER SHINE */}
                <div className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  bg-gradient-to-tr
                  from-white/20
                  to-transparent
                "/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
