'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function DropDownItem(option: { value: string; label: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelect = (option: { value: string; label: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', option.value);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <li
      key={option.value}
      className="p-3.5 cursor-pointer font-sd-gothic text-sm text-lightGray-6
  border-b border-lightGray-4 
  last:border-b-0 hover:bg-lightGray-2"
      onClick={() => handleSelect(option)}
    >
      {option.label}
    </li>
  );
}
