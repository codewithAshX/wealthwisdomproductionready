"use client";

import { motion } from "framer-motion";

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
    role: "Beginner → Profitable Trader",
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
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-[#020617] text-white scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[0.3em] text-emerald-400 text-sm">
            Student Voices
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Traders Who Took The Leap.
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              And Never Looked Back.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Real transformations from students who committed to discipline
            and professional execution.
          </p>
        </div>

        {/* SCROLLER */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-8 min-w-max">

            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="
                min-w-[380px]
                rounded-3xl
                border border-white/10
                bg-gradient-to-b from-white/5 to-transparent
                p-8
                hover:border-emerald-400/40
                hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]
                transition-all
                "
              >
                {/* QUOTE */}
                <p className="text-lg leading-relaxed text-gray-200">
                  “{t.text}”
                </p>

                {/* USER */}
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold">
            Your Future Self Will Thank You.
          </h3>

          <p className="text-gray-400 mt-4">
            The sooner you start — the sooner you compound skill.
          </p>

          <a
            href="https://wa.me/91XXXXXXXX"
            className="
            inline-block mt-8
            rounded-full
            bg-gradient-to-r from-emerald-400 to-green-500
            px-10 py-4
            font-bold
            text-black
            shadow-xl
            hover:scale-105
            transition
            "
          >
            Join The Community →
          </a>
        </div>

      </div>
    </section>
  );
}
