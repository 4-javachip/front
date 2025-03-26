import ProductFilterList from '@/components/pages/products/ProductFilterList';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProductFilterList />
      {children}
    </>
  );
}
