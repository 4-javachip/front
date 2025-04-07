import AddressInput from '@/components/ui/inputs/AddressInput';
import React, { useState, useEffect } from 'react';

interface ShippingNoteSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ShippingNoteSelect({
  value,
  onChange,
}: ShippingNoteSelectProps) {
  const isCustom = value.startsWith('[직접입력]');

  const [customNote, setCustomNote] = useState(
    isCustom ? value.replace('[직접입력]', '') : ''
  );

  // 직접입력일 경우 customNote로 반영
  useEffect(() => {
    if (isCustom) {
      onChange(`[직접입력]${customNote}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customNote]);

  return (
    <div className="space-y-2">
      <label className="font-medium text-[0.75rem]">배송메모</label>
      <select
        value={isCustom ? '직접입력' : value}
        onChange={(e) => {
          if (e.target.value === '직접입력') {
            onChange('[직접입력]');
          } else {
            onChange(e.target.value);
          }
        }}
        className="w-full text-[0.938rem] font-medium border-b-1 border-t-0 border-x-0 border-gray-300 outline-none py-1"
      >
        <option value="" disabled>
          배송 메모를 선택해주세요.
        </option>
        <option value="배송 전 연락 바랍니다.">배송 전 연락 바랍니다.</option>
        <option value="부재 시 경비실에 맡겨주세요.">
          부재 시 경비실에 맡겨주세요.
        </option>
        <option value="부재 시 문 앞에 놓아주세요.">
          부재 시 문 앞에 놓아주세요.
        </option>
        <option value="부재 시 전화 또는 문자 남겨주세요.">
          부재 시 전화 또는 문자 남겨주세요.
        </option>
        <option value="직접입력">직접입력</option>
      </select>

      {isCustom && (
        <AddressInput
          id="customNote"
          label=""
          placeholder="배송 시 요청사항을 기재해 주세요."
          value={customNote}
          onChange={(e) => setCustomNote(e.target.value)}
        />
      )}
    </div>
  );
}
