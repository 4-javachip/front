import PerchaseBar from '@/components/pages/productDetail/PerchaseBar';

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PerchaseBar />
      {children}
    </>
  );
}
