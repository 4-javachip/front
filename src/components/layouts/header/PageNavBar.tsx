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
    <nav className="fixed top-14 left-0 w-full z-50 bg-background h-[56px] font-inter shadow-md">
      <ul className="flex text-gray-700 p-0 m-0 text-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              className={`pt-4.5 pb-[15px] w-[25%] text-center ${
                isActive
                  ? 'font-semibold border-b-3 border-[#00A862]'
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
