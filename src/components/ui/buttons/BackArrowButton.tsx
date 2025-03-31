'use client';

import { useRouter } from 'next/navigation';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';

interface BackButtonProps {
  className?: string;
  ariaLabel?: string;
}

export default function BackArrowButton({ className = '' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center ${className}`}
    >
      <BackArrowIcon />
    </button>
  );
}
