'use client';

import Link from 'next/link';

interface AddressRegisterButtonProps {
  href?: string;
  label?: string;
}

export default function AddressRegisterButton({
  href = 'addshipping?callbackUrl=/order',
  label = '배송지 등록',
}: AddressRegisterButtonProps) {
  return (
    <Link
      href={href}
      className="border font-pretendard border-green text-green px-4 py-1.5 rounded-full text-sm font-semibold transition"
    >
      {label}
    </Link>
  );
}
