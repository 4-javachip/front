'use client';

import useCategoryCarousel from '@/hooks/useCarousel';
import TextCarouselItem from './TextCarouselItem';
import { useRouter, useSearchParams } from 'next/navigation';

export default function TextCarousel({
  items,
  queryKey,
}: {
  items: { id: number; name: string }[];
  queryKey: string;
}) {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useCategoryCarousel();

  const searchParams = useSearchParams();
  const router = useRouter();
  // const selectedCategoryId = Number(searchParams.get('category'));
  const selectedCategoryId = Number(searchParams.get(queryKey));

  // const handleSelect = (id: number) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set('category', String(id));
  //   router.push(`?${params.toString()}`, { scroll: false });
  // };
  const handleSelect = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());

    // 현재 queryKey만 업데이트하고, 다른 값들은 유지
    params.set(queryKey, String(id));

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <ul
      ref={containerRef}
      className="flex flex-row overflow-x-auto cursor-grab active:cursor-grabbing select-none"
      style={{ scrollbarWidth: 'none' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUpOrLeave}
      onMouseLeave={onMouseUpOrLeave}
    >
      {items.map((item) => (
        <TextCarouselItem
          key={item.id}
          category={item.name}
          isSelected={item.id === selectedCategoryId}
          onClick={() => handleSelect(item.id)}
        />
      ))}
    </ul>
  );
}
