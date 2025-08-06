import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'm.media-amazon.com',
      'www.realisaprint.com', 
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "com1pub.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.realisaprint.com",
        port: "",
        pathname: "/blog/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn?.gstatic.com", // Use a wildcard for the number
        port: "",
        pathname: "/images/**",
      },
      // ADDED THIS BLOCK to fix the error
      {
        protocol: "https",
        hostname: "www.resultats-services-publics.fr",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;