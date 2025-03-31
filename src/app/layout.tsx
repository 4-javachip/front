import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '스타벅스 스토어',
    template: '%s | 스타벅스 스토어',
  },
  description: '스파로스 6기 1차 프로젝트 스타벅스 스토어 리빌딩',
  icons: { icon: '/images/starbucks-logo.png' },
  metadataBase: new URL('https://starbucks-store.shop'),
  openGraph: {
    url: 'https://starbucks-store.shop',
    title: '스타벅스 스토어',
    description: '스파로스 6기 1차 프로젝트 스타벅스 스토어 리빌딩',
    images: [{ url: '/images/starbucks-logo.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
