import CategoryCarousel from '@/components/pages/products/CategoryCarousel';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CategoryCarousel />
      <hr className="border-t-1 border-lightGray-1" />
      {children}
    </>
  );
}
