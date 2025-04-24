'use client';

import { useRouter } from 'next/navigation';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';

interface BackButtonProps {
  className?: string;
  ariaLabel?: string;
}

export default function ShippingBackButton({
  className = '',
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/mypage')}
      className={`inline-flex items-center cursor-pointer ${className}`}
    >
      <BackArrowIcon />
    </button>
  );
}
