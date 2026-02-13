import fs from "fs";
import path from "path";

export function getGalleryMedia() {
  const galleryPath = path.join(process.cwd(), "public/gallery");

  const files = fs.readdirSync(galleryPath);

  return files.map((file) => ({
    src: `/gallery/${file}`,
    type: file.endsWith(".mp4") ? "video" : "image",
    category: "ambience", // or however you're mapping it
  }));
}
