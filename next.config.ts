import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    BASE_API_URL: process.env.BASE_API_URL,
  },
  images: {
    domains: [
      'picsum.photos',
      'dummyimage.com',
      'sitem.ssgcdn.com',
      'sui.ssgcdn.com',
      'simg.ssgcdn.com',
    ],
  },
  // compiler: {
  //   removeConsole: true,
  // },
};

export default nextConfig;
