'use client';

import DropDownIcon from '@/components/ui/icons/DropDownIcon';
import CommonInput from '@/components/ui/inputs/CommonInput';
import LargeDropdownModal from '../../../ui/dropdown/LargeDropdownModal';
import { useRef, useState } from 'react';
import { genderOptions } from '@/data/initialDatas';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { InputErrorMessage } from '@/components/layouts/CommonLayout';

export default function SignUpProfileInput({
  onChange,
  errorMessages,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const [selectedOption, setSelectedOption] = useState('남성');
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
    iconRef.current?.classList.toggle('rotate-180');
  };

  const handleGenderSelect = (option: string) => {
    setSelectedOption(option);
    dropdownRef.current?.classList.add('hidden');
    iconRef.current?.classList.remove('rotate-180');
  };

  const handleFocus = () => {
    containerRef.current?.classList.add('border-green');
  };

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, ''); // 숫자만 남기기
    let formattedValue = rawValue;

    // 3자리, 4자리, 4자리로 나누어 - 추가
    if (rawValue.length > 6) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(
        3,
        7
      )}-${rawValue.slice(7, 11)}`;
    } else if (rawValue.length > 3) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}`;
    }

    // 전화번호 포맷팅 적용 후 상태 업데이트
    setPhoneNumber(formattedValue);

    // 기존 onChange 호출하여 다른 필드 처리
    onChange(e);
  };

  return (
    <>
      <li>
        <CommonInput
          placeholder="닉네임 (선택)"
          type="text"
          name="nickname"
          onChange={onChange}
        />
        {errorMessages.nickname && (
          <InputErrorMessage>{errorMessages.nickname}</InputErrorMessage>
        )}
      </li>
      <li>
        <CommonInput
          placeholder="이름"
          type="text"
          name="name"
          onChange={onChange}
        />
        {errorMessages.name && (
          <InputErrorMessage>{errorMessages.name}</InputErrorMessage>
        )}
      </li>
      <li className="flex flex-row space-x-3.5">
        <CommonInput placeholder="YYYY" type="text" name="year" maxLength={4} />
        <CommonInput placeholder="MM" type="text" name="month" maxLength={2} />
        <CommonInput placeholder="DD" type="text" name="date" maxLength={2} />
      </li>
      <li>
        <CommonInput
          placeholder="전화번호"
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {errorMessages.phoneNumber && (
          <InputErrorMessage>{errorMessages.phoneNumber}</InputErrorMessage>
        )}
      </li>
      <div
        className="relative flex justify-between items-end
        py-2.5 px-3 w-full text-lg text-foreground bg-transparent 
        border-b-1 border-lightGray-4"
        ref={containerRef}
      >
        {selectedOption}
        <input
          type="hidden"
          name="gender"
          value={selectedOption}
          onChange={onChange}
        />
        <button type="button" onClick={toggleDropdown} onFocus={handleFocus}>
          <DropDownIcon
            ref={iconRef}
            className="ml-1 mb-1 transform transition-transform duration-300"
            size={15}
          />
        </button>
        <LargeDropdownModal
          options={genderOptions}
          onSelect={handleGenderSelect}
          dropdownRef={dropdownRef}
          className="top-11.5"
        />
      </div>
    </>
  );
}
