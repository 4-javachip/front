'use client';

import { useRef } from 'react';
import EmailDropDownModal from './EmailDropDownModal';

export default function AuthEmailInput() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    containerRef.current?.classList.add('border-green');
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 border-b border-lightGray-4 
      focus-within:border-green text-lg px-3"
    >
      <input
        type="text"
        name="emailId"
        className="py-2.5 w-2/5 text-foreground bg-transparent 
        border-none appearance-none focus:outline-none focus:ring-0 peer"
        placeholder="아이디 입력"
        maxLength={15}
        onFocus={handleFocus}
      />

      <div className="flex flex-row w-3/5 gap-3">
        <span>@</span>
        <EmailDropDownModal />
      </div>
    </div>
  );
}
