'use client';
import DropDownModal from '@/components/ui/dropdown/DropDownModal';
import { useRef } from 'react';
import EmailDropDownModal from './EmailDropDownModal';

export default function AuthEmailInput() {
  const customDomainRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    containerRef.current?.classList.add('border-green');
  };

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'custom') {
      customDomainRef.current?.classList.remove('hidden');
      customDomainRef.current?.removeAttribute('disabled');
    } else {
      customDomainRef.current?.classList.add('hidden');
      customDomainRef.current?.setAttribute('disabled', 'true');
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 border-b border-lightGray-4 
      focus-within:border-green text-lg"
    >
      <input
        type="text"
        name="emailId"
        className="py-2.5 px-0 w-1/2 text-foreground bg-transparent 
        border-none appearance-none focus:outline-none focus:ring-0 peer"
        placeholder="아이디 입력"
        onFocus={handleFocus}
      />
      <span>@</span>
      <div className="flex flex-row w-1/2 gap-2">
        <EmailDropDownModal />
      </div>
    </div>
  );
}
