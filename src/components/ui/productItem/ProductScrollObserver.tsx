'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ScrollObserver({ cursor }: { cursor: number }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        router.push(`/products?cursor=${cursor}`, { scroll: false });
      }
    });

    const ref = loaderRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [cursor, router]);

  return (
    <div ref={loaderRef} className="h-10 w-full bg-transparent">
      load checker
    </div>
  );
}
