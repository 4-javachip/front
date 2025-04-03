'use client';

import { useRef, useState } from 'react';
import DropDownIcon from '@/components/ui/icons/DropDownIcon';
import LargeDropdownModal from '@/components/ui/dropdown/LargeDropdownModal';
import { emailDomains } from '@/data/initialDatas';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { InputErrorMessage } from '@/components/layouts/CommonLayout';

export default function SignUpEmailInput({
  onChange,
  errorMessages,
  inputValues,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
  inputValues?: SignUpStoreStateType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedDomain, setSelectedDomain] = useState('gmail.com');
  const [isCustom, setIsCustom] = useState(false);

  const handleFocus = () => {
    containerRef.current?.classList.add('border-green');
  };

  const toggleDropdown = () => {
    dropdownRef.current?.classList.toggle('hidden');
    iconRef.current?.classList.toggle('rotate-180');
  };

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
    if (domain === 'custom') {
      setIsCustom(true);
      setSelectedDomain('');
      onChange({
        target: { name: 'emailDomain', value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      setIsCustom(false);
      onChange({
        target: { name: 'emailDomain', value: domain },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    dropdownRef.current?.classList.add('hidden');
    iconRef.current?.classList.remove('rotate-180');
  };

  return (
    <li>
      <div
        ref={containerRef}
        className="flex items-center gap-2 border-b border-lightGray-4 
      focus-within:border-green text-lg px-3"
      >
        <input
          type="text"
          name="emailId"
          className="py-2.5 w-2/5 text-foreground bg-transparent 
        border-none appearance-none focus:outline-none focus:ring-0 peer"
          placeholder="아이디 입력"
          onFocus={handleFocus}
          maxLength={15}
          onChange={onChange}
          value={inputValues?.emailId}
        />
        <div className="flex flex-row w-3/5 gap-3">
          <span>@</span>
          <div className="w-full relative flex justify-between">
            <div className="w-full flex items-end bg-transparent focus:outline-none">
              {isCustom ? (
                <input
                  ref={inputRef}
                  type="text"
                  name="emailDomain"
                  className="w-full text-foreground bg-transparent focus:outline-none border-none 
            pr-5"
                  placeholder="직접 입력"
                  defaultValue={selectedDomain}
                  autoFocus
                  maxLength={15}
                  onChange={onChange}
                />
              ) : (
                <>
                  <span className="w-full text-left">{selectedDomain}</span>
                  <input
                    type="hidden"
                    name="emailDomain"
                    value={selectedDomain}
                    onChange={onChange}
                  />
                </>
              )}
              <button
                type="button"
                onClick={toggleDropdown}
                className="cursor-pointer"
              >
                <DropDownIcon
                  ref={iconRef}
                  className="ml-1 mb-1 transform transition-transform duration-300"
                  size={15}
                />
              </button>
            </div>
            <LargeDropdownModal
              options={emailDomains}
              onSelect={handleDomainSelect}
              dropdownRef={dropdownRef}
            />
          </div>
        </div>
      </div>
      {errorMessages.emailId && (
        <InputErrorMessage>{errorMessages.emailId}</InputErrorMessage>
      )}
      {errorMessages.emailDomain && (
        <InputErrorMessage>{errorMessages.emailDomain}</InputErrorMessage>
      )}
    </li>
  );
}
