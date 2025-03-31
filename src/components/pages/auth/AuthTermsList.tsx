'use client';

import { dummyAggrementData } from '@/data/dummyDatas';
import AuthTermsItem from './AuthTermsItem';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import { useState } from 'react';

export default function AuthTermsList() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(dummyAggrementData.length).fill(false)
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
    setCheckedItems(Array(dummyAggrementData.length).fill(isChecked));
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
          {dummyAggrementData.map((term, index) => (
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
        text="다음"
        href="sign-up"
        isEnabled={() => isAllChecked}
      />
    </>
  );
}
