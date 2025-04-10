'use client';

import {
  PaginatedResponseType,
  ProductNameDataType,
} from '@/types/ProductResponseDataTypes';
import ProductlItem from '../../ui/productItem/ProductItem';
import React, { useEffect, useRef, useState } from 'react';
import ProductItemSkeleton from '@/components/ui/skeletons/ProductItemSkeleton';
import { getProductListData } from '@/actions/product-service';
import Loader from '@/components/ui/loader';

export default function ProductList({
  initialProducts,
}: {
  initialProducts: PaginatedResponseType<ProductNameDataType[]>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(initialProducts.content);
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(initialProducts.pageSize);
  const [hasNext, setHasNext] = useState(initialProducts.hasNext);

  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = async () => {
    if (!hasNext) return;

    setIsLoading(true);
    const newData = await getProductListData({
      pageSize: pageSize,
      page: page,
    });
    console.log(page, newData);
    setProducts((prev) => [...prev, ...newData.content]);
    setPage((prev) => prev + 1);
    setHasNext(newData.hasNext);
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    const ref = loaderRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [loaderRef, page, hasNext]);

  return (
    <section className="padded py-6 flex justify-center flex-col">
      <ul className="w-full grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductlItem
            key={product.productUuid}
            productData={product}
            size={800}
          />
        ))}
        {isLoading &&
          Array.from({ length: pageSize }).map((_, index) => (
            <ProductItemSkeleton size={800} key={index} />
          ))}
      </ul>
      {hasNext && (
        <div ref={loaderRef} className="h-10 pt-3 w-full flex justify-center">
          <Loader size="8" />
        </div>
      )}
    </section>
  );
}
