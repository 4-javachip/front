'use client';

import {
  PaginatedResponseType,
  ProductNameDataType,
} from '@/types/ProductResponseDataTypes';
import React, { useEffect, useState } from 'react';
import { BottomLoader } from '@/components/ui/refLoader/BottomLoader';
import { ProductItemListSection } from './ProductItemSection';
import PageNumberViewer from '@/components/ui/utils/PageNumberViewer';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/loader';

export default function ProductList({
  initialProducts,
  page,
}: {
  initialProducts: PaginatedResponseType<ProductNameDataType[]>;
  page: number;
}) {
  const [products, setProducts] = useState<
    PaginatedResponseType<ProductNameDataType[]>[]
  >([] as PaginatedResponseType<ProductNameDataType[]>[]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(page);
  const [hasMore, setHasMore] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (initialProducts.content.length === 0) {
      setHasMore(false);
      return;
    }

    setIsLoading(false);

    const isSamePage = products[0]?.page === initialProducts.page;
    const isFirstPage = initialProducts.page === 1;
    const isPageAlreadyLoaded = products.some(
      (p) => p.page === initialProducts.page
    );

    if (isSamePage && !isFirstPage) {
      scrollTo(0, 10);
      return;
    }

    if (isPageAlreadyLoaded) {
      return;
    }

    setProducts((prev) => {
      if (prev[0]?.page > initialProducts.page) {
        return [initialProducts, ...prev];
      }
      return [...prev, initialProducts];
    });
    setHasMore(initialProducts.hasNext);
  }, [initialProducts, products]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY === 0 &&
        pageNumber > 1 &&
        products[0]?.page === pageNumber
      ) {
        setIsLoading(true);
        router.push(`/products?page=${pageNumber - 1}`, { scroll: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber, page, router, products]);

  return (
    <>
      <section className="padded py-6 flex justify-center flex-col">
        {isLoading && (
          <div className="h-20">
            <Loader size="10" />
          </div>
        )}
        {products.map(
          (product: PaginatedResponseType<ProductNameDataType[]>, index) => (
            <ProductItemListSection
              key={index}
              products={product}
              setPageNumber={setPageNumber}
            />
          )
        )}
        <BottomLoader
          page={pageNumber}
          hasMore={hasMore}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <PageNumberViewer pageNumber={pageNumber} currentPage={page} />
      </section>
    </>
  );
}
