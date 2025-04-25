import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    BASE_API_URL: process.env.BASE_API_URL,
    QR_SIGNIN_KEY: process.env.QR_SIGNIN_KEY,
    QR_SIGNIN_ACCESS_TOKEN: process.env.QR_SIGNIN_ACCESS_TOKEN,
  },
  images: {
    domains: [
      'picsum.photos',
      'dummyimage.com',
      'sitem.ssgcdn.com',
      'sui.ssgcdn.com',
      'simg.ssgcdn.com',
      'succ.ssgcdn.com',
      'sbr-review-s3.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  // compiler: {
  //   removeConsole: true,
  // },
};

export default nextConfig;
