'use client';

import { ProductDetailType } from '@/types/ResponseDataTypes';
import PolicySection from './PolicySection';
import ProductDesc from './ProductDesc';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';
import { useEffect, useState } from 'react';
import { dummyProductDetail } from '@/data/dummyDatas';

export default function ProductDetailSection() {
  const [product, setProduct] = useState<ProductDetailType | null>(
    dummyProductDetail
  );

  useEffect(() => {
    setProduct(dummyProductDetail);
  });

  return (
    <>
      <ProductImg {...product!.image} />
      <div className="flex flex-col gap-10 px-6 pb-3">
        <ProductInfo {...product!} />
        <ProductDesc description={product!.detailDescription} />
        <PolicySection />
      </div>
    </>
  );
}
