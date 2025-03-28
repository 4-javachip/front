import ProductFilterList from '@/components/pages/products/ProductFilterList';
import { Suspense } from 'react';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <ProductFilterList />
      </Suspense>
      {children}
    </>
  );
}
