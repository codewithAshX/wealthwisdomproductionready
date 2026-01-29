"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="mt-3 text-sm font-semibold text-red-600">
      🔥 Only {seats} Seats Left
    </div>
  );
}

/* ---------------- COURSE CARD ---------------- */
function CourseCard({
  course,
  onClick,
  delay,
}: {
  course: any;
  onClick: () => void;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
      group
      rounded-3xl
      overflow-hidden
      border border-gray-100
      bg-white
      shadow-sm
      hover:shadow-2xl
      transition
      cursor-pointer
      "
      onClick={onClick}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="
          h-56 w-full object-cover
          transition duration-500
          group-hover:scale-105
          "
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900">
          {course.title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {course.desc}
        </p>

        {/* PRICE */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-extrabold text-emerald-600">
            {course.price}
          </span>

          <span className="line-through text-gray-400">
            {course.oldPrice}
          </span>
        </div>

        <SeatCounter />

        <button
          className="
          mt-6 w-full rounded-xl
          bg-gradient-to-r from-emerald-500 to-green-500
          px-6 py-3
          font-semibold text-white
          hover:scale-[1.02]
          transition
          "
        >
          Enroll Now →
        </button>
      </div>
    </motion.div>
  );
}

/* ---------------- DATA ---------------- */
const courses = [
  {
    title: "Trading In The Zone – Live Course",
    desc:
      "Designed for traders who want to become full-time professionals by trading consistently in the stock market.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    price: "₹25,000",
    oldPrice: "₹35,000",
  },
  {
    title: "GTF Options",
    desc:
      "Perfect for traders who want to trade options professionally with proper strategies and risk management.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    price: "₹25,000",
    oldPrice: "₹35,000",
  },
  {
    title: "Trading In The Zone – Elite",
    desc:
      "Advanced program with 1-year access, live guidance, and Trading in the Zone 2.0 system.",
    image:
      "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=1200&auto=format&fit=crop",
    price: "₹10,000",
    oldPrice: "₹20,000",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */
export default function CoursesShowcase() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section id="courses" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== SECTION HEADER ===== */}
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-emerald-600 text-sm font-semibold">
              Our Programs
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Professional Trading Courses
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Structured mentorship programs designed to help you trade with
              discipline, confidence, and consistency.
            </p>
          </div>

          {/* ===== DESKTOP GRID ===== */}
          <div className="hidden md:grid md:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <CourseCard
                key={course.title}
                course={course}
                delay={index}
                onClick={() => setSelected(course)}
              />
            ))}
          </div>

          {/* ===== MOBILE SLIDER ===== */}
          <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="snap-center min-w-[85%]"
              >
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

      {/* MODAL */}
      <CourseModal
        course={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
