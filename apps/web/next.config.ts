import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages agar bisa diimpor langsung dari source.
  transpilePackages: ["@sparkmind/shared"],
};

export default nextConfig;
