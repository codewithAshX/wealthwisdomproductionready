import fs from "fs";
import path from "path";

export function getGalleryMedia() {
  const dir = path.join(process.cwd(), "public/gallery");

  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const ext = file.split(".").pop()?.toLowerCase();

    const videoExt = ["mp4", "webm", "ogg"];

    return {
      type: videoExt.includes(ext!) ? "video" : "image",
      src: `/gallery/${file}`,
    };
  });
}
