'use client';

import { useEffect, useState } from 'react';

export default function ProductDetailTabs() {
  const [activeId, setActiveId] = useState<string>('product-info');

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { label: '정보', targetId: 'product-info' },
    { label: '리뷰', targetId: 'product-review' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offsets = tabs.map((tab) => {
        const el = document.getElementById(tab.targetId);
        if (!el) return { id: tab.targetId, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: tab.targetId, offset: Math.abs(rect.top) };
      });

      const closest = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      );

      setActiveId(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-14 z-10 bg-background shadow-[0_0.25rem_0.25rem_-0.125rem_rgba(0,0,0,0.1)]">
      <ul className="flex text-lightGray-6 p-0 m-0 text-sm h-[3.5rem] border-b border-lightGray-4">
        {tabs.map((tab) => {
          const isActive = activeId === tab.targetId;
          return (
            <li
              key={tab.label}
              className={`pt-4.5 pb-[0.9375rem] w-[50%] text-center cursor-pointer ${
                isActive &&
                'font-semibold text-foreground border-b-3 border-green'
              }`}
              onClick={() => scrollToId(tab.targetId)}
            >
              <span className="hover:text-green-600">{tab.label}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
