"use client";

import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Zap, Users, Monitor } from "lucide-react";
import Image from "next/image";

export default function AppleGallery({ media = [] }: any) {
  const [video, setVideo] = useState<string | null>(null);
  const [brokenAssets, setBrokenAssets] = useState<string[]>([]);

  // 🛡️ Auto-Prune Logic: Removes any src that fails to load
  const handleMediaError = (src: string) => {
    setBrokenAssets((prev) => [...prev, src]);
  };

  // 🧹 Filter media to remove broken assets and organize categories
  const validMedia = (media || []).filter((m: any) => m && !brokenAssets.includes(m.src));

  const sections = [
    {
      id: "ambience",
      title: "Wealth Intelligence",
      sub: "Atmosphere",
      icon: Zap,
      items: validMedia.filter((m: any) => m.category === "ambience")
    },
    {
      id: "mentorship",
      title: "Directorial Desk",
      sub: "Mentorship",
      icon: Users,
      items: validMedia.filter((m: any) => m.category === "mentorship")
    },
    {
      id: "infrastructure",
      title: "Tactical Systems",
      sub: "Hardware",
      icon: Monitor,
      items: validMedia.filter((m: any) => m.category === "infrastructure")
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-32">
      <PhotoProvider>
        {sections.map((section, sIdx) => (
          <div key={section.id} className="relative">
            
            {/* ✍️ Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-700/60 font-mono text-[10px] tracking-widest uppercase">
                  <section.icon size={14} />
                  <span>Section // 0{sIdx + 1}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-extralight tracking-tighter text-slate-900">
                  {section.title}<span className="text-emerald-500">.</span>
                </h3>
              </div>
              <p className="max-w-xs text-slate-500 text-sm leading-relaxed italic border-r-2 border-emerald-100 pr-6 text-right">
                Creative spatial design for high-performance capital management.
              </p>
            </div>

            {/* 🧩 Creative Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
              {section.items.map((item: any, iIdx: number) => {
                // Logic for sizing images (Bento Style)
                const isLarge = iIdx === 0 || iIdx === 3;
                return (
                  <motion.div
                    key={item.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-emerald-50/50 group 
                      ${isLarge ? "md:col-span-8 md:row-span-2" : "md:col-span-4 md:row-span-1"}`}
                  >
                    {item.type === "image" ? (
                      <PhotoView src={item.src}>
                        <div className="w-full h-full relative">
                          <Image
                            src={item.src}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                            alt="Institutional Asset"
                            onError={() => handleMediaError(item.src)}
                            priority={iIdx < 4} // Prioritize first 4 images
                          />
                        </div>
                      </PhotoView>
                    ) : (
                      <div className="w-full h-full cursor-pointer" onClick={() => setVideo(item.src)}>
                        <video
                          src={item.src}
                          onError={() => handleMediaError(item.src)} // 🛡️ Error Handler
                          className="w-full h-full object-cover"
                          muted loop playsInline
                          onMouseOver={(e) => e.currentTarget.play()}
                          onMouseOut={(e) => e.currentTarget.pause()}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/10">
                           <Play className="text-white fill-white" size={32} />
                        </div>
                      </div>
                    )}
                    
                    {/* ✨ Hover Label */}
                    <div className="absolute bottom-6 left-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-100">
                        <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-tighter">View Detail +</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </PhotoProvider>

      {/* 🎬 Video Modal */}
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#CDE1D6]/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
            onClick={() => setVideo(null)}
          >
            <div className="absolute top-10 right-10 cursor-pointer text-emerald-900/50 hover:text-emerald-900 transition-colors">
              <X size={40} strokeWidth={1} />
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="max-w-6xl w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black"
            >
              <video src={video} controls autoPlay className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}