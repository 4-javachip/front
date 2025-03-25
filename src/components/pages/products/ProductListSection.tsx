'use client';
import { dummyProducts } from '@/data/dummyDatas';
import { ProductItemType } from '@/types/ResponseDataTypes';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';

export default function ProductListSection() {
  const [Products, setProducts] = useState<ProductItemType[]>([]);

  useEffect(() => {
    setProducts(dummyProducts);
  });
  return (
    <div className="p-6 flex justify-center">
      <ProductList products={Products} />
    </div>
  );
}
