'use client';

import useInfiniteProductList from '@/hooks/useInfiniteProductList';
import { getProductNameDataByProductUuid } from '@/actions/product-service';
import { getProductDataType } from '@/types/RequestDataTypes';
import ProductListView from '@/components/ui/ProductListView';
import { getBestProductsByCategoryId } from '@/actions/best-service';

export default function BestProductList({
  params,
}: {
  params?: getProductDataType;
}) {
  const {
    loaderRef,
    items: products,
    isLoading,
    isParamsLoading,
    hasMore,
  } = useInfiniteProductList({
    fetchPageData: async (page, p) => {
      // 3은 하드코딩
      const { data: bestProductDatas } = await getBestProductsByCategoryId(
        p?.categoryId || 3
      );
      const productList = await Promise.all(
        bestProductDatas.map((item) =>
          getProductNameDataByProductUuid(item.productUuid)
        )
      );
      return { content: productList, hasNext: false };
    },
    params,
  });

  return (
    <ProductListView
      products={products}
      isLoading={isLoading}
      isParamsLoading={isParamsLoading}
      hasMore={hasMore}
      loaderRef={loaderRef}
    />
  );
}
