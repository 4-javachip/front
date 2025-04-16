'use client';

import useInfiniteProductList from '@/hooks/useInfiniteProductList';
import { getEventProductDatasByEventUuid } from '@/actions/event-service';
import { getProductNameDataByProductUuid } from '@/actions/product-service';
import ProductListView from '@/components/ui/ProductListView';

export default function EventProductList({ eventUuid }: { eventUuid: string }) {
  const {
    loaderRef,
    items: products,
    isLoading,
    isParamsLoading,
    hasMore,
  } = useInfiniteProductList({
    params: eventUuid,
    fetchPageData: async (page, eventUuid) => {
      const { data: res } = await getEventProductDatasByEventUuid({
        eventUuid,
        page,
      });
      const productList = await Promise.all(
        res.content.map((item) =>
          getProductNameDataByProductUuid(item.productUuid)
        )
      );
      return { content: productList, hasNext: res.hasNext };
    },
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
