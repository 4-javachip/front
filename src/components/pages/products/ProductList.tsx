'use client';

import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import ProductlItem from '../../ui/productItem/ProductItem';
import React, { useEffect, useRef, useState } from 'react';
import { getProductListData } from '@/actions/product-service';
import Loader from '@/components/ui/loader';
import { useSearchParams, useRouter } from 'next/navigation';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { getProductDataType } from '@/types/RequestDataTypes';

export default function ProductList({
  params,
}: {
  params?: getProductDataType;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageSize = 20;
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const initialPage = Number(searchParams.get('page')) || 1;

  const [page, setPage] = useState(initialPage);
  const [products, setProducts] = useState<ProductNameDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const res = await getProductListData({
        pageSize,
        page,
        categoryId: params?.categoryId,
        sortType: params?.sortType,
        keyword: params?.keyword,
        subCategoryId: params?.subCategoryId,
        seasonId: params?.seasonId,
      });
      console.log(res);

      setProducts((prev) => {
        const newItems = res.content.filter(
          (item) => !prev.some((p) => p.productUuid === item.productUuid)
        );
        return [...prev, ...newItems];
      });
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
      <div ref={loaderRef} className="h-10 pt-4 w-full flex justify-center">
        {isLoading && <Loader size="8" />}
      </div>
    </section>
  );
}
