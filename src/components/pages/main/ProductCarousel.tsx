'use client';

import { EventCarouselType } from '@/types/ResponseDataTypes';
import ProductCarouselItem from './ProductItem';

export default function ProductCarousel({
  eventId,
  title,
  products,
}: EventCarouselType) {
  return (
    <div className="flex flex-col container gap-[30px]">
      <p className="font-inter font-semibold text-[22px]">{title}</p>
      <div
        className="flex flex-row gap-[18px] overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((product) => (
          <ProductCarouselItem key={product.id} {...product} size={140} />
        ))}
      </div>
    </div>
  );
}
