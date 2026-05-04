"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CourseModalProps {
  course: any;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  if (!course) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-950 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.title}
            className="h-64 w-full object-cover"
          />

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-extrabold text-white">
              {course.title}
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              {course.desc}
            </p>

            <ul className="mt-6 space-y-2 text-slate-300">
              <li>✔ Comprehensive planning and coordination</li>
              <li>✔ Budget transparency and risk control</li>
              <li>✔ Dedicated project support team</li>
              <li>✔ Quality assurance at every milestone</li>
            </ul>

            {/* Price */}
            <div className="mt-6">
              <span className="text-3xl font-extrabold text-yellow-400">
                {course.price}
              </span>
              <span className="ml-2 text-slate-400 line-through">
                {course.oldPrice}
              </span>
              <span className="ml-2 text-slate-500">+ VAT</span>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/91XXXXXXXX"
              className="block mt-8 text-center rounded-md bg-yellow-400 px-6 py-4 font-bold text-black hover:bg-yellow-300 transition"
            >
              Request a Quote
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-200 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
