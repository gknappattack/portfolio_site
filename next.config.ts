import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
