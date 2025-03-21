'use client';
import { BannerSlideImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface BannerSlideProps {
  slides: BannerSlideImageType[];
}

export default function BannerSlide({ slides }: BannerSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length, currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-[330px] flex-shrink-0 relative"
          >
            <Image
              src={slide.imageUrl}
              alt={slide.description}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`w-[9.5px] h-[9.5px] rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-[#212121]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
