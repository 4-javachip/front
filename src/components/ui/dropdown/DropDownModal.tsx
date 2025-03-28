'use client';

import { sortOptions } from '@/data/dummyDatas';
import DropDownIcon from '../icons/DropDownIcon';
import DropDownItem from './DropDownItem';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';

export default function DropDownModal() {
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || 'newest';

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle('hidden');
    }
  };

  return (
    <>
      <button className="cursor-pointer" onClick={toggleDropdown}>
        <div className="flex flex-row gap-1.5 items-center">
          <p className="font-body text-xs">
            {sortOptions.find((option) => option.value === currentSort)
              ?.label || '신상품순'}
          </p>
          <DropDownIcon
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        <div
          ref={dropdownRef}
          className="absolute w-28 z-50 right-0 mx-6
            bg-background shadow-[0_0_0.5rem_rgba(0,0,0,0.08)] rounded-md mt-2"
        >
          <ul>
            {sortOptions.map((option) => (
              <DropDownItem
                key={option.label}
                value={option.value}
                label={option.label}
              />
            ))}
          </ul>
        </div>
      </button>
    </>
  );
}
