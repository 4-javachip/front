import BackArrowButton from '@/components/ui/buttons/BackArrowButton';
import React from 'react';

export default function CartHeader() {
  return (
    <header className="relative w-full h-14 px-4 py-3 border-b">
      <ul>
        <li className="absolute left-4 top-1/2 -translate-y-1/2">
          <BackArrowButton />
        </li>
        <li className="flex justify-center font-inter font-semibold text-sm ">
          <h1>장바구니</h1>
        </li>
      </ul>
    </header>
  );
}
