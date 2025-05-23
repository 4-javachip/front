'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Loader from './loader';

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
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const urlParams = new URLSearchParams(window.location.search);
          urlParams.set('page', String(page + 1));
          const nextUrl = `${window.location.pathname}?${urlParams.toString()}`;
          router.push(nextUrl, { scroll: false });
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
