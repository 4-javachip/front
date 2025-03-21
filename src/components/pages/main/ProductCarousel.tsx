'use client';

import { productList } from '@/data/dummyDatas';
import ProductCarouselItem from './ProductCarouselItem';
import { useEffect, useState } from 'react';
import { ProductlItemType } from '@/types/ResponseDataTypes';

export default function ProductCarousel() {
  const [products, setProducts] = useState<ProductlItemType[]>([]);

  useEffect(() => {
    setProducts(productList);
  });

  return (
    <div className="flex flex-col container gap-[30px]">
      <p className="font-inter font-semibold text-[22px]">Ways of Working</p>
      <div
        className="flex flex-row gap-[18px] overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((product) => (
          <ProductCarouselItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
