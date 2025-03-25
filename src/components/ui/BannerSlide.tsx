'use client';
import { BannerSlideImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface BannerSlideProps {
  slides: BannerSlideImageType[];
}

export default function BannerSlide({ slides }: BannerSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const slideRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (endX - startX > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }

    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    setIntervalId(newIntervalId);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (startX - endX > 50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (endX - startX > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }

    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    setIntervalId(newIntervalId);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);

    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    setIntervalId(newIntervalId);
  };

  return (
    <section
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ul
        ref={slideRef}
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <li
            key={slide.id}
            className="w-full h-[330px] flex-shrink-0 relative list-none"
          >
            <Image
              src={slide.imageUrl}
              alt={slide.description}
              fill
              className="object-cover w-full h-full pointer-events-none"
            />
          </li>
        ))}
      </ul>
      <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`w-[0.59375rem] h-[0.59375rem] rounded-full transition-colors duration-300
              cursor-pointer 
              ${currentIndex === index ? 'bg-[#212121]' : 'bg-white'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ul>
    </section>
  );
}
