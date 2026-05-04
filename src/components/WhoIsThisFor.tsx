"use client";

import { motion } from "framer-motion";
import {
  Home,
  MousePointerClick,
  FileText,
  Bus,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingProcess() {
  const router = useRouter();

  const steps = [
    {
      icon: Home,
      title: "Choose Property",
      desc: "Browse and select your preferred property.",
    },
    {
      icon: MousePointerClick,
      title: "Click Free Visit",
      desc: "Select the free visit option from listing.",
    },
    {
      icon: FileText,
      title: "Submit Details",
      desc: "Confirm your visit by filling basic details.",
    },
    {
      icon: Bus,
      title: "We Pick You Up",
      desc: "Enjoy a smooth site visit with our team.",
    },
  ];

  return (
    <section className="bg-[#0a0a0c] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Book a <span className="text-amber-400">Free Visit</span>
          </h2>

          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
            A simple, guided journey to experience your future property in person.
          </p>
        </div>

        {/* HORIZONTAL STEPS */}
        <div className="relative grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                {/* CONNECTING LINE */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-[-50%] w-full h-[1px] bg-gradient-to-r from-amber-400/50 to-transparent" />
                )}

                {/* CARD */}
                <div className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-amber-400/30">

                  {/* STEP NUMBER */}
                  <span className="text-xs text-amber-400/50 tracking-[0.3em]">
                    0{i + 1}
                  </span>

                  {/* ICON */}
                  <div className="mt-6 mb-6 w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition">
                    <Icon size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white text-lg font-medium mb-3">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15),transparent_70%)] rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => router.push("/contact")}
            className="px-10 py-4 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-400 transition shadow-[0_10px_40px_rgba(245,158,11,0.4)]"
          >
            Book Your Free Visit
          </button>
        </div>

      </div>
    </section>
  );
}