"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Users, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WhyChooseUs() {
  const router = useRouter();

  const points = [
    {
      icon: ShieldCheck,
      title: "Legally verified and Approved projects",
      desc: "Every project is thoroughly verified and approved by authorities ensuring complete legal transparency.",
    },
    {
      icon: FileCheck,
      title: "Transparent documentation and pricing",
      desc: "No hidden charges, no misleading terms — just clear, fair, and honest transactions.",
    },
    {
      icon: Users,
      title: "Expert guidance through every step",
      desc: "From selection to registration, we guide you through a smooth and worry-free journey.",
    },
    {
      icon: Sparkles,
      title: "Customer-first approach with long-term support",
      desc: "Our relationship continues even after possession with full support and assistance.",
    },
  ];

  return (
    <section id="services" className="bg-[#0a0a0c] py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* HEADER */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Why <span className="text-amber-400">Choose Us</span>
            </h2>

            <p className="text-white/50 mt-4 max-w-md">
              Transparent documentation, guided site visits, and investment-ready plots tailored to your goals.
            </p>
          </div>

          {/* TIMELINE STYLE LIST */}
          <div className="relative border-l border-white/10 pl-8 space-y-10">

            {points.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* DOT */}
                  <div className="absolute -left-[34px] top-1 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-black shadow-lg">
                    <Icon size={16} />
                  </div>

                  <h4 className="text-white text-lg font-medium">
                    {item.title}
                  </h4>

                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/properties")}
            className="mt-12 px-8 py-4 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-400 transition shadow-lg"
          >
            View Properties
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          {/* ANGLED IMAGE EFFECT */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400"
              className="w-full h-[500px] object-cover"
            />

            {/* SLANTED CUT EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60" />

            {/* RIGHT BORDER ACCENT */}
            <div className="absolute right-0 top-0 h-full w-[4px] bg-amber-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}