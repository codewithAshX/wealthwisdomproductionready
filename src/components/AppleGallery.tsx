"use client";

import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";

export default function AppleGallery({ media }: any) {
  const categories = ["all", ...new Set(media.map((m: any) => m.category))];
  const [active, setActive] = useState("all");
  const [video, setVideo] = useState<string | null>(null);

  const filtered =
    active === "all" ? media : media.filter((m: any) => m.category === active);

  return (
    <div className="max-w-7xl mx-auto">
      {/* CATEGORY FILTER */}
      <div className="flex gap-3 flex-wrap mb-12 justify-center">
        {categories.map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
            ${
              active === cat
                ? "bg-green-500 text-white shadow-lg"
                : "bg-green-100 text-gray-700 hover:bg-green-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <PhotoProvider>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filtered.map((item: any) => (
            <motion.div
              key={item.src}
              className="break-inside-avoid group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item.type === "image" ? (
                <PhotoView src={item.src}>
                  <img
                    src={item.src}
                    loading="lazy"
                    className="rounded-2xl cursor-pointer transition duration-500 group-hover:scale-[1.05]"
                  />
                </PhotoView>
              ) : (
                <div onClick={() => setVideo(item.src)}>
                  <video src={item.src} className="rounded-2xl" muted />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </PhotoProvider>

      {/* VIDEO MODAL */}
      {video && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setVideo(null)}
        >
          <video src={video} controls autoPlay className="max-h-[80vh]" />
        </div>
      )}
    </div>
  );
}
