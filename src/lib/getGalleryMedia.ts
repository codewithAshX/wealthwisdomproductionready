import fs from "fs";
import path from "path";

export function getGalleryMedia() {
  const galleryPath = path.join(process.cwd(), "public/gallery");

  try {
    const files = fs.readdirSync(galleryPath);

    // Filter to only include optimized image formats (exclude videos and HEIC)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const validFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    // Limit to first 12 images for performance
    const limitedFiles = validFiles.slice(0, 12);

    return limitedFiles.map((file) => ({
      src: `/gallery/${file}`,
      type: "image",
      category: "ambience", // Default category for now
    }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}
