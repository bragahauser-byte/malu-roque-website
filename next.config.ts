import type { NextConfig } from "next";

// O site mora na raiz (maluroque.com.br). PAGES_BASE_PATH só se um dia voltar a um subcaminho.
const base = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: base || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;
