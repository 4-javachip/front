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
      className="flex items-center gap-2 border-b border-lightGray-4 focus-within:border-green transition-all"
    >
      <input
        type="text"
        name="emailId"
        className="py-2.5 px-0 w-1/2 text-sm text-foreground bg-transparent 
        border-none appearance-none focus:outline-none focus:ring-0 peer"
        placeholder="아이디 입력"
        onFocus={handleFocus}
      />
      <div className="flex flex-row w-1/2 gap-2">
        <span>@</span>
        {/* <select
          name="emailDomain"
          className="bg-transparent text-sm focus:outline-none"
          defaultValue="gmail.com"
          onChange={handleDomainChange}
        >
          <option value="gmail.com">gmail.com</option>
          <option value="naver.com">naver.com</option>
          <option value="daum.net">daum.net</option>
          <option value="custom">직접 입력</option>
        </select> */}
        <EmailDropDownModal />
        {/* <input
          ref={customDomainRef}
          type="text"
          name="customEmailDomain"
          className="hidden w-36 text-sm text-foreground bg-transparent focus:outline-none border-b border-lightGray-4"
          placeholder="도메인 입력"
          disabled
          onFocus={handleFocus}
        /> */}
      </div>
    </div>
  );
}
