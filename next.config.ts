import type { NextConfig } from "next";

const repo = "my-portfolio"; // ⬅️ ΒΑΛΕ ΕΔΩ ΑΚΡΙΒΩΣ ΤΟ ΟΝΟΜΑ ΤΟΥ REPO ΣΟΥ

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repo}`,
  },
};

export default nextConfig;
