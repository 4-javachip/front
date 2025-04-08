'use client';

import AuthTermsItem from './AuthTermsItem';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AgreementType } from '@/types/ResponseDataTypes';

export default function AuthTermsList({
  agreements,
}: {
  agreements: AgreementType[];
}) {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(agreements.length).fill(false)
  );

  const isAllChecked = checkedItems.every(Boolean);

  const handleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckedItems(Array(agreements.length).fill(isChecked));
  };

  const isRequiredChecked = agreements
    .map((item, index) => (item.required ? checkedItems[index] : true))
    .every(Boolean);

  const handleNextClick = () => {
    const optionalIndex = agreements.findIndex((item) => !item.required);
    const optionalChecked =
      optionalIndex !== -1 ? checkedItems[optionalIndex] : false;

    router.push(`sign-up?optionalConsent=${optionalChecked}`);
  };

  return (
    <>
      <section className="padded">
        <CustomCheckBox
          label="전체 동의"
          onChange={handleAllCheck}
          checked={isAllChecked}
        />
        <hr className="my-5 border-lightGray-4" />
        <ul className="space-y-7.5">
          {agreements.map((term, index) => (
            <AuthTermsItem
              key={index}
              {...term}
              checked={checkedItems[index]}
              onChange={() => handleCheck(index)}
            />
          ))}
        </ul>
      </section>
      <ConfirmNextButton
        onClick={handleNextClick}
        isEnabled={() => isRequiredChecked}
      >
        다음
      </ConfirmNextButton>
    </>
  );
}
