import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    BASE_API_URL: process.env.Base_API_URL,
  },
  images: {
    domains: ['picsum.photos', 'dummyimage.com', 'sitem.ssgcdn.com'],
  },
};

export default nextConfig;
