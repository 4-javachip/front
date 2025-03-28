'use client';

import { EventCarouselType } from '@/types/ResponseDataTypes';
import ProductlItem from '../../ui/ProductItem';
import useCategoryCarousel from '@/hooks/useCarousel';

export default function ProductCarousel({
  eventId,
  title,
  products,
}: EventCarouselType) {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useCategoryCarousel();

  return (
    <section className="flex flex-col container gap-8">
      <h2 className="font-inter font-semibold text-[1.375rem]">{title}</h2>
      <ul
        ref={containerRef}
        className="flex flex-row gap-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        {products.map((product) => (
          <ProductlItem key={product.id} {...product} size={140} />
        ))}
      </ul>
    </section>
  );
}
