import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'standalone', // Génère des fichiers HTML statiques
  // Désactive le comportement SPA pour les liens
  trailingSlash: true,
  images: {
    unoptimized: true, // Désactive l'optimisation d'image pour l'export
  },
};

export default nextConfig;
