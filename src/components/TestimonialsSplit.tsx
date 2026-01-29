"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Hiren Patel",
    role: "Trader",
    text:
      "GTF Trading in the Zone classes are life changing. After completing this program, I gained confidence and clarity in the market.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aman Verma",
    role: "Student Trader",
    text:
      "I had zero knowledge before joining. The structured learning helped me grow step by step.",
    image:
      "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Rohit Sharma",
    role: "Beginner Trader",
    text:
      "The mentors explain everything with real market examples. That made a huge difference.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328d4c5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Neha Gupta",
    role: "Aspiring Trader",
    text:
      "The confidence I gained after this course is priceless. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Kunal Shah",
    role: "Options Learner",
    text:
      "Clear concepts, strong risk management, and excellent support from mentors.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TestimonialsSplit() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Testimonial
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-emerald-500">
            That&apos;s What They Said
          </h2>
          <div className="mx-auto mt-4 h-1 w-28 bg-emerald-500 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              Happy Faces
            </p>
            <h3 className="mt-3 text-2xl font-bold text-gray-900">
              Success Stories
            </h3>
            <div className="mt-3 h-1 w-20 bg-emerald-500 rounded-full" />

            <p className="mt-6 text-gray-600 leading-relaxed">
              Welcome to the leading stock market institute. We help
              traders gain confidence, discipline, and practical
              market understanding.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={t.image}
                src={t.image}
                alt={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-[320px] w-[260px] rounded-2xl object-cover shadow-xl"
              />
            </AnimatePresence>
          </div>

          {/* RIGHT TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-600 leading-relaxed">
                {t.text}
              </p>

              <button className="mt-4 text-emerald-500 font-semibold">
                Read More
              </button>

              <div className="mt-6">
                <p className="font-bold text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">
                  {t.role}
                </p>
                <div className="mt-2 text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <div className="mt-16 flex justify-end gap-4">
          <button
            onClick={prev}
            className="rounded-full border border-emerald-500 p-3 text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            className="rounded-full border border-emerald-500 p-3 text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
