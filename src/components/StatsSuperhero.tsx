"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, ShieldCheck, Users, Zap } from "lucide-react";

/* ================= DATA ================= */

const features = [
  {
    icon: TrendingUp,
    title: "Built on Real Market Logic",
    desc: "Structured systems proven across real market cycles.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Always Comes First",
    desc: "Capital protection before profit chasing.",
  },
  {
    icon: Users,
    title: "Elite Trader Community",
    desc: "A focused network of disciplined traders.",
  },
  {
    icon: Zap,
    title: "Clarity in Real Time",
    desc: "Actionable insights for confident decisions.",
  },
];

/* ================= COMPONENT ================= */

export default function GodLevelWhyChoose() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  /* Detect Mobile */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Scroll Progress */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  /* Cursor Glow (desktop only) */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouse(e: any) {
    if (!isMobile) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative bg-white md:h-[320vh] h-auto py-32"
    >
      {/* Sticky container only on desktop */}
      <div className="md:sticky md:top-0 md:h-screen flex items-center overflow-hidden">

        {/* Cursor Glow */}
        {!isMobile && !reduceMotion && (
          <motion.div
            className="pointer-events-none fixed w-[450px] h-[450px] rounded-full bg-emerald-200/40 blur-[120px] -z-10"
            style={{
              left: mouseX,
              top: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        )}

        {/* Ambient Parallax Glow */}
        {!reduceMotion && (
          <motion.div
            style={{ y: bgY }}
            className="absolute left-1/3 top-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[180px] -z-10"
          />
        )}

        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* Hero Text */}
          <motion.div
            style={
              !reduceMotion
                ? { opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }
                : {}
            }
            className="text-center mb-24"
          >
            <p className="text-emerald-600 font-mono text-xs tracking-[0.6em] uppercase mb-6">
              Why Wealth Wisdom
            </p>

            <h2 className="text-5xl md:text-[120px] font-light tracking-tight text-slate-900 leading-[0.95]">
              Not just trading.
              <br />
              <span className="italic font-serif text-emerald-600">
                A discipline.
              </span>
            </h2>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            {features.map((item, i) => {
              const Icon = item.icon;

              const y = !reduceMotion
                ? useTransform(
                    scrollYProgress,
                    [i * 0.2, i * 0.2 + 0.3],
                    [150, 0]
                  )
                : 0;

              const opacity = !reduceMotion
                ? useTransform(
                    scrollYProgress,
                    [i * 0.2, i * 0.2 + 0.3],
                    [0, 1]
                  )
                : 1;

              return (
                <motion.div
                  key={item.title}
                  style={{ y, opacity }}
                  className="relative p-10 md:p-14 rounded-[32px] border border-slate-100 bg-white/70 backdrop-blur-xl shadow-xl"
                >
                  {/* Glass Lighting */}
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/60 to-transparent" />

                  <div className="relative z-10">
                    <Icon
                      size={40}
                      strokeWidth={1.3}
                      className="text-emerald-500 mb-6"
                    />

                    <h3 className="text-2xl md:text-4xl font-light text-slate-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 md:text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
