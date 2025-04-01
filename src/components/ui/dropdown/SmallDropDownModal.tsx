'use client';

import { sortOptions } from '@/data/dummyDatas';
import DropDownIcon from '../icons/DropDownIcon';
import DropDownItem from './DropDownItem';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export default function SmallDropDownModal() {
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || 'newest';

  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle('hidden');
    }
    if (iconRef.current) {
      iconRef.current.classList.toggle('rotate-180');
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
            ref={iconRef}
            className="transform transition-transform duration-300"
          />
        </div>
        <div
          ref={dropdownRef}
          className="hidden absolute w-28 z-50 right-0 mx-6
            bg-background shadow-[0_0_0.5rem_rgba(0,0,0,0.08)] rounded-md mt-2
            overflow-hidden"
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
