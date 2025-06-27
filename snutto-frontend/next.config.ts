import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static site generation
  distDir: 'out',   // Explicit output directory
  images: {
    unoptimized: true // Required for static exports
  },
  reactStrictMode: true,
};

export default nextConfig;