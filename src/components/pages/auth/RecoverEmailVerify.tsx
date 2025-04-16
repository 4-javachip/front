'use client';

import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import AuthHeading from './AuthHeading';
import { useState } from 'react';
import Loader from '@/components/ui/loaders/loader';
import SignUpEmailInput from './signUp/SignUpEmailInput';
import EmailVerifyInput from './signUp/EmailVerifyInput';
import { EmailVerifyStateType } from '@/types/storeDataTypes';

export default function RecoverEmailVerify() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState<EmailVerifyStateType>({
    emailId: '',
    emailDomain: 'gmail.com',
    emailVerificationCode: '',
    isEmailVerified: '',
    isEmailSent: '',
  });

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
          purpose="password_reset"
        />
      </ul>
      <ConfirmNextButton
        onClick={() => {}}
        isEnabled={() => true}
        type="button"
      >
        {isLoading ? <Loader /> : '다음'}
      </ConfirmNextButton>
    </form>
  );
}
