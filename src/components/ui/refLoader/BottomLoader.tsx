'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Loader from '../loader';

export const BottomLoader = ({
  page,
  hasMore,
  isLoading,
  setIsLoading,
}: {
  page: number;
  hasMore: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log('BottomLoader useEffect', page, hasMore, isLoading);
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log('entries', entries);
        const entry = entries[0];
        if (entry.isIntersecting) {
          router.push(`/products?page=${page + 1}`, { scroll: false });
          setIsLoading(true);
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loaderRef, isLoading, hasMore]);

  return (
    <>
      {!isLoading && hasMore && (
        <div
          ref={loaderRef}
          className="flex justify-center items-center h-20"
        ></div>
      )}
      {isLoading && (
        <div className="h-10 pt-4 w-full flex justify-center">
          <Loader size="10" />
        </div>
      )}
    </>
  );
};
