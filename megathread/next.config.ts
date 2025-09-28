import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  allowedDevOrigins: ['127.0.0.1']
};

export default nextConfig;
