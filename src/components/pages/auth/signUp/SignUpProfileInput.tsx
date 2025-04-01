'use client';

import DropDownIcon from '@/components/ui/icons/DropDownIcon';
import CommonInput from '@/components/ui/inputs/CommonInput';
import LargeDropdownModal from '../../../ui/dropdown/LargeDropdownModal';
import { useRef, useState } from 'react';
import { genderOptions } from '@/data/initialDatas';

export default function SignUpProfileInput({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const [selectedOption, setSelectedOption] = useState('성별');
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
    iconRef.current?.classList.toggle('rotate-180');
  };

  const handleDomainSelect = (option: string) => {
    setSelectedOption(option);
    dropdownRef.current?.classList.add('hidden');
    iconRef.current?.classList.remove('rotate-180');
  };

  const handleFocus = () => {
    containerRef.current?.classList.add('border-green');
  };

  return (
    <ul className="padded space-y-6">
      <CommonInput placeholder="닉네임 (선택)" type="text" name="nickname" />
      <CommonInput placeholder="이름" type="text" name="name" />
      <div className="flex flex-row space-x-3.5">
        <CommonInput placeholder="YYYY" type="text" name="year" />
        <CommonInput placeholder="MM" type="text" name="month" />
        <CommonInput placeholder="DD" type="text" name="date" />
      </div>
      <CommonInput placeholder="전화번호" type="text" name="phone" />

      <div
        className="relative flex justify-between items-end
        py-2.5 px-3 w-full text-lg text-foreground bg-transparent 
        border-b-1 border-lightGray-4"
        ref={containerRef}
      >
        {selectedOption}
        <button type="button" onClick={toggleDropdown} onFocus={handleFocus}>
          <DropDownIcon
            ref={iconRef}
            className="ml-1 mb-1 transform transition-transform duration-300"
            size={15}
          />
        </button>
        <LargeDropdownModal
          options={genderOptions}
          onSelect={handleDomainSelect}
          dropdownRef={dropdownRef}
          className="top-11.5"
        />
      </div>
    </ul>
  );
}
