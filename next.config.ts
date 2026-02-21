import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    // Enable local images for gallery
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize build output
  output: 'standalone',
  // Compress output
  compress: true,
};

export default nextConfig;
