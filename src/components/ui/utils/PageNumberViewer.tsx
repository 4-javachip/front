import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function PageNumberViewer({
  pageNumber,
  currentPage,
}: {
  pageNumber: number;
  currentPage: number;
}) {
  const router = useRouter();

  useEffect(() => {
    const target = `/products?page=${pageNumber}`;
    const current = window.location.search;

    if (!current.includes(`page=${pageNumber}`)) {
      router.push(target, { scroll: false });
    }
  }, [pageNumber, router]);

  return (
    <div
      className={cn(
        'w-fit fixed',
        'left-[50%] transform translate-x-[-50%] bottom-10 z-[100]',
        'px-4 py-2 text-xs text-white',
        'bg-green opacity-90 rounded-full',
        'text-sm font-sd-gothic'
      )}
    >
      {pageNumber > 0 ? pageNumber + ' 페이지' : '검색결과가 없습니다.'}
    </div>
  );
}
