'use client';

import Loader from '@/components/ui/loaders/loader';
import ProductItem from '@/components/ui/products/ProductItem';
import {
  PaginatedResponseType,
  ProductNameDataType,
} from '@/types/ProductResponseDataTypes';
import { Suspense, useEffect, useRef } from 'react';

export const ProductItemListSection = ({
  products,
  setPageNumber,
}: {
  products: PaginatedResponseType<ProductNameDataType[]>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPageNumber(products.page);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.01,
      }
    );

    const current = ulRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [products.page]);

  return (
    <>
      <ul
        ref={ulRef}
        className="w-full grid grid-cols-2 gap-4 min-h-[80vh]"
        data-page-number={products && products.page}
      >
        {products.content &&
          products.content.map((product) => (
            <Suspense
              key={product.productUuid + products.page}
              fallback={
                <div className="h-10 pt-4 w-full flex justify-center">
                  <Loader size="10" />
                </div>
              }
            >
              <ProductItem productData={product} size={800} />
            </Suspense>
          ))}
      </ul>
    </>
  );
};
