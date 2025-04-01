'use client';

import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { useState } from 'react';
import AuthHeading from '@/components/ui/AuthHeading';
import SignUpAccountInput from './SignUpAccountInput';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import SignUpProfileInput from './SignUpProfileInput';

export default function MultiStepSignUp() {
  const [step, setStep] = useState(1);
  const [inputValues, setInputValues] = useState<SignUpStoreStateType>({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    name: '',
    birthdate: '',
    phoneNumber: '',
    gender: '남성',
  });

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const authMessages: Record<number, string[]> = {
    1: ['이메일과 비밀번호를', '입력해 주세요.'],
    2: ['유저 정보를', '입력해 주세요.'],
    3: ['전송된 인증 번호를', '입력해 주세요.'],
  };

  return (
    <>
      <section className="padded pb-14">
        {authMessages[step]?.map((message, index) => (
          <AuthHeading key={index}>{message}</AuthHeading>
        ))}
      </section>
      <form className="padded space-y-6">
        {(() => {
          switch (step) {
            case 1:
              return <SignUpAccountInput />;
            case 2:
              return <SignUpProfileInput />;
            case 3:
              return <p>3</p>;
            default:
              return null;
          }
        })()}
      </form>
      <ConfirmNextButton
        text="다음"
        onClick={() => {
          nextStep();
        }}
        isEnabled={() => true}
      />
    </>
  );
}
