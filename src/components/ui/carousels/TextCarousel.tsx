'use client';

import useCategoryCarousel from '@/hooks/useCarousel';
import TextCarouselItem from './TextCarouselItem';
import { useRouter, useSearchParams } from 'next/navigation';

export default function TextCarousel({
  items,
  type,
}: {
  items: { id: number | string; name: string }[];
  type: string;
}) {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useCategoryCarousel();

  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategoryId = searchParams.get(type);

  const handleSelect = (id: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (id === null) {
      params.delete(type);
    } else {
      params.set(type, id);
    }

    if (type === 'category') {
      params.delete('subCategory');
      params.delete('season');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <ul
      ref={containerRef}
      className="flex flex-row overflow-x-auto cursor-grab active:cursor-grabbing select-none
      h-[24px]"
      style={{ scrollbarWidth: 'none' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUpOrLeave}
      onMouseLeave={onMouseUpOrLeave}
    >
      {type === 'category' && (
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
          isSelected={
            (type === 'event' &&
              !selectedCategoryId &&
              items[0]?.id === item.id) ||
            String(item.id) === selectedCategoryId
          }
          onClick={() => handleSelect(String(item.id))}
        />
      ))}
    </ul>
  );
}
