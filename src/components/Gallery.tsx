"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Gallery({ media }: any) {
  return (
    <PhotoProvider>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {media.map((item: any, index: number) => (
          <div key={index} className="break-inside-avoid">
            {item.type === "image" ? (
              <PhotoView src={item.src}>
                <img
                  src={item.src}
                  className="rounded-xl cursor-pointer hover:scale-105 transition"
                />
              </PhotoView>
            ) : (
              <video
                src={item.src}
                controls
                className="rounded-xl w-full"
              />
            )}
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
}
