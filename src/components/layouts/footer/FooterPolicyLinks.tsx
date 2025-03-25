import React from 'react';
import Link from 'next/link';

export default function FooterPolicyLinks() {
  const links = [
    { href: '/privacy-policy', label: '개인정보처리방침' },
    { href: '/terms', label: '홈페이지 이용약관' },
    { href: '/card-terms', label: '스타벅스카드 이용약관' },
  ];

  return (
    <nav className="pb-4 pt-5 pl-6 bg-lightGray-3 font-SDGothic font-medium text-xs text-gray-500">
      <ul className="flex space-x-2.5">
        {links.map((link, index) => (
          <li key={link.href} className="flex items-center space-x-2.5">
            <Link href={link.href} className="hover:text-green-600">
              {link.label}
            </Link>
            {index < links.length - 1 && (
              <span className="text-[#CDCDCD]" aria-hidden="true">
                |
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
