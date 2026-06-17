import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves from /digital-asset/ in production
  basePath: isProd ? "/digital-asset" : "",
  assetPrefix: isProd ? "/digital-asset/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
