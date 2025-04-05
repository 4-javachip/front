'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PageNavBar = () => {
  const pathname = usePathname();

  // 각 메뉴의 경로
  const navItems = [
    { href: '/', label: '메인' },
    { href: '/event', label: '기획전' },
    { href: '/best', label: '베스트' },
    { href: '/mypage', label: '마이페이지' },
  ];

  return (
    <nav
      className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-background h-[3.5rem] shadow-[0_0.25rem_0.25rem_-0.125rem_rgba(0,0,0,0.1)] w-full max-w-[var(--base-w)]
    border-x border-lightGray-5"
    >
      <ul className="flex text-gray-700 p-0 m-0 text-sm h-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              className={`pt-4.5 pb-[0.9375rem] w-[25%] text-center ${
                isActive
                  ? 'font-semibold border-b-3 border-green'
                  : 'font-Ragular'
              }`}
            >
              <Link href={item.href}>
                <span className="hover:text-green-600">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNavBar;
