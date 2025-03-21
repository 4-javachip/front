'use client';
import { EventCarouselType } from '@/types/ResponseDataTypes';
import ProductCarousel from './ProductCarousel';
import { useEffect, useState } from 'react';
import { eventCarousels } from '@/data/dummyDatas';

export default function MainProductSection() {
  const [Carousels, setCarousels] = useState<EventCarouselType[]>([]);

  useEffect(() => {
    setCarousels(eventCarousels);
  });

  return (
    <div className="flex flex-col pl-6 py-[50px] gap-[50px]">
      {Carousels.map((carousel) => (
        <ProductCarousel key={carousel.eventId} {...carousel} />
      ))}
    </div>
  );
}
