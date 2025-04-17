'use client';

import AuthHeading from './AuthHeading';
import { useEffect, useState } from 'react';
import SignUpEmailInput from './signUp/SignUpEmailInput';
import EmailVerifyInput from './signUp/EmailVerifyInput';
import { EmailVerifyStateType } from '@/types/storeDataTypes';

export default function RecoverEmailVerify({
  inputValues,
  setInputValues,
  setIsEnabled,
  purpose,
}: {
  inputValues: EmailVerifyStateType;
  setInputValues: React.Dispatch<React.SetStateAction<EmailVerifyStateType>>;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  purpose: 'sign_up' | 'password_reset' | 'account_recovery';
}) {
  useEffect(() => {
    const isAllFieldsValid =
      inputValues.isEmailVerified === 'true' ? true : false;
    setIsEnabled(isAllFieldsValid);
  }, [inputValues, setIsEnabled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      const updatedValues = { ...prev, [name]: value };
      // const res = signUpSchema.safeParse(updatedValues);
      // console.log(updatedValues);
      // if (!res.success) {
      //   const fieldErrors: Partial<SignUpStoreStateType> = {};
      //   res.error.errors.forEach((error) => {
      //     const fieldName = error.path[0] as keyof SignUpStoreStateType;
      //     fieldErrors[fieldName] = error.message;
      //   });
      //   setErrorMessages(fieldErrors);
      // } else {
      //   setErrorMessages({});
      // }

      return updatedValues;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form onKeyDown={handleKeyDown} className="w-full h-full">
      <section className=" padded pb-14">
        <AuthHeading>본인확인을 위해</AuthHeading>
        <AuthHeading>인증을 진행해 주세요.</AuthHeading>
      </section>
      <ul className="padded space-y-6">
        <SignUpEmailInput onChange={handleChange} inputValues={inputValues} />
        <EmailVerifyInput
          handleChange={handleChange}
          inputValues={inputValues}
          purpose={purpose}
        />
      </ul>
    </form>
  );
}
