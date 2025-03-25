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
    <section className="relative w-full h-full overflow-hidden">
      <ul
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
              className="object-cover w-full h-full"
            />
          </li>
        ))}
      </ul>
      <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`w-[0.59375rem] h-[0.59375rem] rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-[#212121]' : 'bg-white'
            }`}
          />
        ))}
      </ul>
    </section>
  );
}
