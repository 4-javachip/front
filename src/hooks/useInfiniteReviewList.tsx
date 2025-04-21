import { ProductReviewType } from '@/types/ProductResponseDataTypes';
import { useEffect, useRef, useState } from 'react';

type UseInfiniteReviewListProps<TParams, TItem> = {
  fetchPageData: (
    page: number,
    params: TParams
  ) => Promise<{
    content: TItem[];
    hasNext: boolean;
  }>;
  params: TParams;
};

export default function useInfiniteReviewList<TParams, TItem>({
  fetchPageData,
  params,
}: UseInfiniteReviewListProps<TParams, TItem>) {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<TItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isParamsLoading, setIsParamsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchInitial = async () => {
      setIsParamsLoading(true);
      setIsLoading(false);
      setPage(0);
      const { content, hasNext } = await fetchPageData(0, params);
      setItems(content);
      setHasMore(hasNext);
      setIsParamsLoading(false);
    };

    fetchInitial();
  }, [params]);

  useEffect(() => {
    if (page === 0) return;

    const fetchNext = async () => {
      setIsLoading(true);
      const { content, hasNext } = await fetchPageData(page, params);
      setItems((prev) => {
        const newItems = content.filter(
          (item) =>
            !prev.some(
              (p) =>
                (p as ProductReviewType).reviewUuid ===
                (item as ProductReviewType).reviewUuid
            )
        );
        return [...prev, ...newItems];
      });
      setHasMore(hasNext);
      setIsLoading(false);
    };

    fetchNext();
  }, [page]);

  useEffect(() => {
    if (isParamsLoading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [isLoading, hasMore, isParamsLoading]);

  return {
    loaderRef,
    items,
    isLoading,
    isParamsLoading,
    hasMore,
  };
}
