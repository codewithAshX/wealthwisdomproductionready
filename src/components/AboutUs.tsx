"use client";

import { motion } from "framer-motion";
import { Users, BadgeCheck, ShieldCheck, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  const items = [
    {
      icon: <Users size={18} />,
      title: "Expert Team",
      desc: "Experts in real estate and legal services",
    },
    {
      icon: <BadgeCheck size={18} />,
      title: "Approved Projects",
      desc: "RERA-approved and ready for registration",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Quality & Transparency",
      desc: "Built with integrity and high standards",
    },
    {
      icon: <Building2 size={18} />,
      title: "Customer Focus",
      desc: "We help you find your perfect property",
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">

      {/* 🎬 BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-[1px]"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-modern-city-1576/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🌫️ OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl text-white mb-10 font-light">
            About <span className="text-amber-400">Us</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-white/80 text-[15px] leading-relaxed backdrop-blur-sm bg-white/[0.03] p-6 rounded-2xl border border-white/10"
        >
          <p className="mb-4">
            At RR Golden Properties, we believe that owning your dream home should be a seamless and transparent experience.
            Established with a vision to redefine real estate standards, we specialize in residential layouts,
            villa plots, and premium developments.
          </p>

          <p className="mb-6">
            Our team combines expertise in development, legal documentation, and customer service —
            ensuring every project meets the highest standards of trust, quality, and value.
          </p>

          <button
            onClick={() => router.push("/about")}
            className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            Read More
          </button>
        </motion.div>

      </div>
    </section>
  );
}