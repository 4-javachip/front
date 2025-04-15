'use client';

import {
  PaginatedResponseType,
  ProductNameDataType,
} from '@/types/ProductResponseDataTypes';
import React, { useEffect, useState } from 'react';
import Loader from '@/components/ui/loader';
import { useRouter } from 'next/navigation';
import { getProductDataType } from '@/types/RequestDataTypes';
import { ProductItemListSection } from './ProductItemListSection';
import { BottomLoader } from '@/components/ui/refLoader/BottomLoader';
import PageNumberViewer from '@/components/ui/utils/PageNumberViewer';

export default function ProductList({
  initialProducts,
  params,
}: {
  initialProducts: PaginatedResponseType<ProductNameDataType[]>;
  params: getProductDataType;
}) {
  const [products, setProducts] = useState<
    PaginatedResponseType<ProductNameDataType[]>[]
  >([] as PaginatedResponseType<ProductNameDataType[]>[]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(params.page);
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
        pageNumber &&
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
  }, [pageNumber, params.page, router, products]);

  return (
    // <section className="padded py-6 flex justify-center flex-col">
    //   <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
    //     {products.map((product) => (
    //       <ProductlItem
    //         key={product.productUuid}
    //         productData={product}
    //         size={800}
    //       />
    //     ))}
    //   </ul>
    //   <div ref={loaderRef} className="h-10 pt-4 w-full flex justify-center">
    //     {isLoading && <Loader size="8" />}
    //   </div>
    // </section>
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
        <PageNumberViewer pageNumber={pageNumber} currentPage={params.page} />
      </section>
    </>
  );
}
