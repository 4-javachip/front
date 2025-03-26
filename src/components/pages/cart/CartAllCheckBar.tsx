'use client';

import { useState } from 'react';
import Checkbox from '../../ui/inputs/CheckBox';

interface CartAllCheckBarProps {
  isAllChecked: boolean;
  onToggleAll: () => void;
  onDeleteSelected?: () => void;
  onDeleteAll?: () => void;
}

export default function CartCheckBar({
  onDeleteSelected,
  onDeleteAll,
}: CartAllCheckBarProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <section
      className="flex justify-between items-center py-3 px-6 border-b border-gray-100"
      aria-label="장바구니 선택 바"
    >
      <div className="flex items-center gap-2 font-inter font-medium text-sm">
        <Checkbox
          checked={isChecked}
          onChange={handleCheck}
          ariaLabel="전체 선택"
        />
        <span>전체 선택</span>
      </div>

      <div className="text-xs  space-x-2 font-inter font-medium ">
        <button
          type="button"
          onClick={onDeleteSelected}
          className="text-green-600 font-medium"
        >
          선택 삭제
        </button>
        <span className="text-[#7E7E7E]">|</span>
        <button type="button" onClick={onDeleteAll} className="text-[#7E7E7E]">
          전체 삭제
        </button>
      </div>
    </section>
  );
}
