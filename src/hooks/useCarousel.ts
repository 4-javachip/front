'use client';

import { useRef, useState } from 'react';

export default function useCategoryCarousel() {
  const containerRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!containerRef.current || !isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return {
    containerRef,
    onMouseDown,
    onMouseMove,
    onMouseUpOrLeave,
  };
}
