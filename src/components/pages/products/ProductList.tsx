'use client';

import useInfiniteProductList from '@/hooks/useInfiniteProductList';
import { getProductListData } from '@/actions/product-service';
import { getProductDataType } from '@/types/RequestDataTypes';
import { PAGE_SIZE } from '@/constants/constants';
import ProductListView from '@/components/ui/products/ProductListView';

export default function ProductList({
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
      const res = await getProductListData({
        pageSize: PAGE_SIZE,
        page,
        categoryId: p?.categoryId,
        sortType: p?.sortType,
        keyword: p?.keyword,
        subCategoryId: p?.subCategoryId,
        seasonId: p?.seasonId,
      });
      if (!res.success)
        return {
          content: [],
          hasNext: false,
        };

      return { content: res.data!.content, hasNext: res.data!.hasNext };
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
