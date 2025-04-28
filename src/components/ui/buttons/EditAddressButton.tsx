'use client';

import { useRouter } from 'next/navigation';

interface EditAddressButtonProps {
  uuid: string;
}

export default function EditAddressButton({ uuid }: EditAddressButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.replace(
      `/shipping-addresses/${uuid}?callbackUrl=/cartAddressSelect`
    );
  };

  return (
    <button
      onClick={handleClick}
      className="font-body text-xs text-lightGray-7  hover:text-green"
    >
      수정
    </button>
  );
}
