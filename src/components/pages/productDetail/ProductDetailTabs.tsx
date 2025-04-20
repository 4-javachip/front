'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProductDetailTabs({ tabId }: { tabId: string }) {
  const pathname = usePathname();

  const isCurrentTab = (tab: string) => {
    if (tab === '') return pathname === `/product/${tabId}`;
    return pathname.startsWith(`/product/${tabId}/${tab}`);
  };

  return (
    <div className="mb-4 flex justify-center gap-12">
      <Link
        href={`/product/${tabId}`}
        className={`text-lg text-gray-400
        ${isCurrentTab('') && 'text-primary'}`}
      >
        description
      </Link>
      <Link
        href={`/product/${tabId}/reviews`}
        className={`text-lg text-gray-400
        ${isCurrentTab('review') && 'text-primary'}`}
      >
        review
      </Link>
    </div>
  );
}
