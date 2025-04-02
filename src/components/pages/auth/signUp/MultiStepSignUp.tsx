'use client';

import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { useState } from 'react';
import AuthHeading from '@/components/ui/AuthHeading';
import SignUpPasswordInput from './SignUpPasswordInput';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import SignUpProfileInput from './SignUpProfileInput';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';
import CommonInput from '@/components/ui/inputs/CommonInput';
import { signUpSchema } from '@/schemas/signUpSchema';
import SignUpEmailInput from './SignUpEmailInput';
import { useRouter } from 'next/navigation';

export default function MultiStepSignUp({
  handleSignUp,
}: {
  handleSignUp: (signUpFormData: FormData) => void;
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [step, setStep] = useState(1);
  const [inputValues, setInputValues] = useState<SignUpStoreStateType>({
    emailId: '',
    emailDomain: 'gmail.com',
    password: '',
    name: '',
    confirmPassword: '',
    year: '',
    month: '',
    date: '',
    phoneNumber: '',
    gender: '남성',
  });
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpStoreStateType>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    const res = signUpSchema.safeParse({
      ...inputValues,
      [name]: value,
    });
    if (!res.success) {
      const fieldErros: Partial<SignUpStoreStateType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpStoreStateType;
        fieldErros[fieldName] = error.message;
      });
      setErrorMessages(fieldErros);

      setIsEnabled(false);
    } else {
      console.log('no error');
      setErrorMessages({});

      setIsEnabled(true);
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const authMessages: Record<number, string[]> = {
    1: ['이메일과 비밀번호를', '입력해 주세요.'],
    2: ['유저 정보를', '입력해 주세요.'],
    3: ['전송된 인증 번호를', '입력해 주세요.'],
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 p-1.5">
        <div
          className="flex items-center h-14 cursor-pointer"
          onClick={prevStep}
        >
          <BackArrowIcon />
        </div>
      </header>

      <section className="padded pb-14">
        {authMessages[step]?.map((message, index) => (
          <AuthHeading key={index}>{message}</AuthHeading>
        ))}
      </section>
      <form action={handleSignUp}>
        {/* 1 */}
        <ul className={`padded space-y-6 ${step === 1 ? '' : 'hidden'}`}>
          <SignUpEmailInput
            onChange={handleChange}
            errorMessages={errorMessages}
          />
          <SignUpPasswordInput
            onChange={handleChange}
            errorMessages={errorMessages}
          />
        </ul>
        {/* 2 */}
        <ul className={`padded space-y-6 ${step === 2 ? '' : 'hidden'}`}>
          <SignUpProfileInput
            onChange={handleChange}
            errorMessages={errorMessages}
          />
          <button type="submit">Sign Up</button>
        </ul>
        {/* 3 */}
        <p className={`padded space-y-6 ${step === 3 ? '' : 'hidden'}`}>
          <CommonInput placeholder="인증번호" type="text" name="confirm" />
        </p>
        {/* submit */}
        <ConfirmNextButton
          className={`${step != 2 && 'hidden'}`}
          text="submit"
          onClick={() => {}}
          isEnabled={() => isEnabled}
        />
      </form>
      <ConfirmNextButton
        className={`${step != 1 && 'hidden'}`}
        text="다음"
        onClick={() => {
          nextStep();
        }}
        isEnabled={() => true}
      />
    </>
  );
}
