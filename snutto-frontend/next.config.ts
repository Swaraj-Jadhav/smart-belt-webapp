import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static site generation
  distDir: 'out',   // Explicit output directory
  images: {
    unoptimized: true // Required for static exports
  },
  // Optional: Add if you're using environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Optional: If using TypeScript with paths
  typescript: {
    ignoreBuildErrors: false, // Set to true only if needed
  }
};

export default nextConfig;