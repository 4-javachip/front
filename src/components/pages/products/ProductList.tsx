'use client';

import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import ProductItem from '../../ui/productItem/ProductItem';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { getProductListData } from '@/actions/product-service';
import Loader from '@/components/ui/loader';
import { useRouter } from 'next/navigation';

export default function ProductList({
  initialProducts,
  initialHasNext,
  pageSize,
  page,
}: {
  initialProducts: ProductNameDataType[];
  initialHasNext: boolean;
  pageSize: number;
  page: number;
}) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasNext);
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    console.log('Fetching data for page:', page);
    try {
      const res = await getProductListData({ pageSize, page });
      console.log('Fetched data:', res);

      setProducts((prev) => [...prev, ...res.content]);
      setHasMore(res.hasNext);
    } catch (error) {
      console.error('Failed to fetch product data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page, fetchData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('entries', entries);
        const entry = entries[0];
        if (entry.isIntersecting) {
          router.push(`/products?page=${page + 1}`, { scroll: false });
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [isLoading, hasMore, router, page]);

  return (
    <section className="padded py-6 flex justify-center flex-col">
      <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
        {products.map((product) => (
          <ProductItem
            key={product.productUuid}
            productData={product}
            size={800}
          />
        ))}
      </ul>

      {!isLoading && hasMore && (
        <div className="w-full flex justify-center h-10" ref={loaderRef} />
      )}
      {isLoading && <Loader size="10" />}
    </section>
  );
}
