'use client';

import { useRef } from 'react';
import { EventCarouselType } from '@/types/ResponseDataTypes';
import ProductCarouselItem from './ProductCarouselItem';

export default function ProductCarousel({
  eventId,
  title,
  products,
}: EventCarouselType) {
  const containerRef = useRef<HTMLUListElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!containerRef.current) return;
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!containerRef.current || !isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 드래그 이동 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    isDragging = false;
  };

  return (
    <section className="flex flex-col container gap-[30px]">
      <h2 className="font-inter font-semibold text-[22px]">{title}</h2>
      <ul
        ref={containerRef}
        className="flex flex-row gap-[18px] overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        {products.map((product) => (
          <ProductCarouselItem key={product.id} {...product} size={140} />
        ))}
      </ul>
    </section>
  );
}
