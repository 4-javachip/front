import BackArrowButton from '@/components/ui/buttons/BackArrowButton';
import React from 'react';

export default function OrderHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background pb-4.5 pt-5 py-3 shadow-md">
      <ul>
        <li className="absolute left-4 top-1/2 -translate-y-1/2">
          <BackArrowButton />
        </li>
        <li className="flex justify-center font-inter font-semibold text-sm ">
          <h1>결제하기</h1>
        </li>
      </ul>
    </header>
  );
}
