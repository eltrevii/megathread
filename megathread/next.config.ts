import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
};

export default nextConfig;
