'use client';

import ProductDetailTabs from '@/components/pages/productDetail/ProductDetailTabs';
import { useParams } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const { productUuid } = params;
  if (!productUuid) return;
  return (
    <>
      <ProductDetailTabs tabId={productUuid?.toString()}></ProductDetailTabs>
      {children}
    </>
  );
}
