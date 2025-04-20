'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProductDetailTabs({ tabId }: { tabId: string }) {
  const pathname = usePathname();

  const tabs = [
    { label: '상품 정보', href: `/product/${tabId}` },
    { label: '리뷰', href: `/product/${tabId}/reviews` },
  ];

  return (
    <nav>
      <ul className="flex text-lightGray-6 p-0 m-0 text-sm h-[3.5rem] border-b border-lightGray-4">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <li
              key={tab.href}
              className={`pt-4.5 pb-[0.9375rem] w-[50%] text-center ${
                isActive &&
                'font-semibold text-foreground border-b-3 border-green'
              }`}
            >
              <Link href={tab.href} scroll={false}>
                <span className="hover:text-green-600">{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
