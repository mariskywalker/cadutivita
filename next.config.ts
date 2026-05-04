import type { NextConfig } from "next";

/**
 * Para um projeto Vercel só da Tivita (mesmo código que caduameplan):
 * define `CADU_SITE_ROOT=/tivita` nas Environment Variables desse projeto.
 * Assim https://cadutivita.vercel.app/ abre a landing em /tivita.
 */
const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  transpilePackages: ["recharts"],
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    const dest = process.env.CADU_SITE_ROOT?.trim();
    if (dest && dest.startsWith("/") && dest !== "/") {
      return [{ source: "/", destination: dest, permanent: false }];
    }
    return [];
  },
};

export default nextConfig;
