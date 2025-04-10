'use client';

import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import ProductlItem from '../../ui/productItem/ProductItem';
import React, { useEffect, useRef, useState } from 'react';
import { getProductListData } from '@/actions/product-service';
import Loader from '@/components/ui/loader';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ProductList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageSize = 6;
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const initialPage = Number(searchParams.get('page')) || 1;

  const [page, setPage] = useState(initialPage);
  const [products, setProducts] = useState<ProductNameDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const res = await getProductListData({ pageSize, page });

      // 중복 제거
      // const newItems = res.content.filter(
      //   (item) => !products.some((p) => p.productUuid === item.productUuid)
      // );

      setProducts((prev) => [...prev, ...res.content]);
      setHasMore(res.hasNext);
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading && hasMore) {
          const nextPage = page + 1;
          setPage(nextPage);
          router.push(`/products?page=${nextPage}`, { scroll: false });
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loaderRef, isLoading, hasMore, page, router]);

  return (
    <section className="padded py-6 flex justify-center flex-col">
      <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
        {products.map((product) => (
          <ProductlItem
            key={product.productUuid}
            productData={product}
            size={800}
          />
        ))}
      </ul>
      <div ref={loaderRef} className="h-10 pt-10 w-full flex justify-center">
        {isLoading && <Loader size="8" />}
      </div>
    </section>
  );
}
