'use client';

import { useRef, useState } from 'react';
import DropDownIcon from '@/components/ui/icons/DropDownIcon';
import EmailDomainDropdownModal from './EmailDomainDropdownModal';

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
    <div className="w-full relative flex justify-between">
      <div className="w-full flex items-end bg-transparent focus:outline-none">
        {isCustom ? (
          <input
            ref={inputRef}
            type="text"
            name="customEmailDomain"
            className="w-full text-foreground bg-transparent focus:outline-none border-none 
            pr-5"
            placeholder="직접 입력"
            autoFocus
            maxLength={15}
          />
        ) : (
          <span className="w-full text-left">{selectedDomain}</span>
        )}
        <button type="button" onClick={toggleDropdown}>
          <DropDownIcon
            ref={iconRef}
            className="ml-1 mb-1 transform transition-transform duration-300"
            size={15}
          />
        </button>
      </div>
      <EmailDomainDropdownModal
        onSelect={handleDomainSelect}
        dropdownRef={dropdownRef}
      />
    </div>
  );
}
