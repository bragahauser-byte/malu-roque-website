import type { NextConfig } from "next";

// No GitHub Pages o site mora em /malu-roque-website. Localmente e na Vercel, na raiz.
const base = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: base || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;
