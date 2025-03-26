'use client';

import useCategoryCarousel from '@/hooks/useCarousel';
import TextCarouselItem from './TextCarouselItem';

export default function TextCarousel({
  items,
}: {
  items: { id: number; name: string }[];
}) {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useCategoryCarousel();

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
        <TextCarouselItem key={item.id} category={item.name} />
      ))}
    </ul>
  );
}
