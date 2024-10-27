import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
