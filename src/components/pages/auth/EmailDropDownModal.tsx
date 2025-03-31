'use client';

import { useRef, useState } from 'react';
import DropDownIcon from '@/components/ui/icons/DropDownIcon';
import { emailDomains } from '@/data/initialDatas';

export default function EmailDomainDropdown() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedDomain, setSelectedDomain] = useState('gmail.com');
  const [isCustom, setIsCustom] = useState(false);

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
    iconRef.current?.classList.toggle('rotate-180');
  };

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
    setIsCustom(domain === 'custom');
    dropdownRef.current?.classList.add('hidden');
    iconRef.current?.classList.remove('rotate-180');
  };

  return (
    <div className="w-full relative flex items-center justify-between">
      <button
        type="button"
        className="w-full flex items-center bg-transparent focus:outline-none"
        onClick={toggleDropdown}
      >
        {isCustom ? (
          <input
            ref={inputRef}
            type="text"
            name="customEmailDomain"
            className="w-full text-foreground bg-transparent focus:outline-none border-none pr-6"
            placeholder="직접 입력"
            autoFocus
          />
        ) : (
          <span className="w-full text-left">{selectedDomain}</span>
        )}
        <DropDownIcon
          ref={iconRef}
          className="ml-1 transform transition-transform duration-300"
          size={15}
        />
      </button>
      {/* 드롭다운 모달 */}
      <div
        ref={dropdownRef}
        className="hidden absolute w-full z-50 top-8 right-0 mx-6
            bg-background shadow-[0_0_0.5rem_rgba(0,0,0,0.08)] rounded-md mt-2
            overflow-hidden"
      >
        <ul>
          {emailDomains.map((option) => (
            <li
              key={option.value}
              className="p-3 cursor-pointer border-b-1
              last:border-b-0 hover:bg-lightGray-2
              text-sm"
              onClick={() => handleDomainSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
