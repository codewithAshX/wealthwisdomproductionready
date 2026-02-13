"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Zap, Users, Monitor, X } from "lucide-react";

type MediaItem = {
  src: string;
  type: "image" | "video";
  category: "ambience" | "mentorship" | "infrastructure";
};

const CinematicSection = ({
  title,
  subtitle,
  description,
  icon: Icon,
  item,
  setVideo,
}: any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* TEXT SIDE */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Icon size={18} />
              </div>
              <span className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                {subtitle} // 2026
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extralight tracking-[-0.03em] leading-[1] text-slate-900">
              {title}
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed border-l border-emerald-500/20 pl-6">
              {description}
            </p>
          </motion.div>

          {/* VISUAL SIDE */}
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ scale, y }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.12)] border border-slate-200"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  className="w-full h-[600px] object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-[600px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onClick={() => setVideo(item.src)}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AppleGallery({ media = [] }: { media: MediaItem[] }) {
  const [video, setVideo] = useState<string | null>(null);

  const ambience = media.find((m) => m.category === "ambience");
  const mentorship = media.find((m) => m.category === "mentorship");
  const infrastructure = media.find((m) => m.category === "infrastructure");

  return (
    <div className="bg-white">
      
      {/* HERO — MATCHES HOMEPAGE SCALE */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-light tracking-tighter leading-[0.85] text-slate-900"
          >
            The Visual <br />
            <span className="italic font-serif text-slate-300">
              Portfolio.
            </span>
          </motion.h1>
        </div>
      </section>

      {ambience && (
        <CinematicSection
          title="Wealth Intelligence Environment."
          subtitle="Atmosphere"
          description="Engineered for disciplined capital execution and strategic clarity."
          icon={Zap}
          item={ambience}
          setVideo={setVideo}
        />
      )}

      {mentorship && (
        <CinematicSection
          title="Directorial Mentorship."
          subtitle="Guidance"
          description="Institutional knowledge refined into structured execution."
          icon={Users}
          item={mentorship}
          setVideo={setVideo}
        />
      )}

      {infrastructure && (
        <CinematicSection
          title="Institutional Infrastructure."
          subtitle="Hardware"
          description="Multi-terminal systems powering modern capital command."
          icon={Monitor}
          item={infrastructure}
          setVideo={setVideo}
        />
      )}

      {/* MODAL */}
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
            onClick={() => setVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-6xl w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200"
            >
              <video
                src={video}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>

            <div className="absolute top-10 right-10 text-slate-400 hover:text-slate-900 cursor-pointer">
              <X size={36} strokeWidth={1} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
