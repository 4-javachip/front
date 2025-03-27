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
  const selectedCategoryId = Number(searchParams.get(queryKey));

  const handleSelect = (id: number | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (id === null) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, String(id));
    }

    if (queryKey === 'category') {
      params.delete('subCategory');
      params.delete('season');
    }

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
      {queryKey === 'category' && (
        <TextCarouselItem
          key="all"
          category="전체"
          isSelected={!selectedCategoryId}
          onClick={() => handleSelect(null)}
        />
      )}
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
