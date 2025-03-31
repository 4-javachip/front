'use client';

import { dummyAggrementData } from '@/data/dummyDatas';
import AuthTermsItem from './AuthTermsItem';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function AuthTermsList() {
  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    document
      .querySelectorAll<HTMLInputElement>('.terms-checkbox')
      .forEach((checkbox) => {
        checkbox.checked = isChecked;
      });
  };

  // const isAllChecked = () => {
  //   return Array.from(
  //     document.querySelectorAll<HTMLInputElement>('.terms-checkbox')
  //   ).every((checkbox) => checkbox.checked);
  // };

  return (
    <>
      <section className="padded">
        <CustomCheckBox label="전체 동의" onChange={handleAllCheck} />
        <hr className="my-5 border-lightGray-4" />
        <ul className="space-y-7.5">
          {dummyAggrementData.map((term, index) => (
            <AuthTermsItem key={index} {...term} />
          ))}
        </ul>
      </section>
      <ConfirmNextButton text="다음" href="auth/verification" />
    </>
  );
}
