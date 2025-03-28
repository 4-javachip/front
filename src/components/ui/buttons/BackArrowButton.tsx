'use client';

import { useRouter } from 'next/navigation';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';

interface BackButtonProps {
  className?: string;
  ariaLabel?: string;
}

export default function BackArrowButton({
  className = '',
  ariaLabel = '뒤로가기',
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label={ariaLabel}
      className={`inline-flex items-center ${className}`}
    >
      <BackArrowIcon />
    </button>
  );
}
