'use client';

import { SignUpStepType, SignUpStoreStateType } from '@/types/storeDataTypes';
import { useEffect, useState } from 'react';
import AuthHeading from '@/components/ui/AuthHeading';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';
import { signUpSchema } from '@/schemas/signUpSchema';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { useRouter } from 'next/navigation';
import { signUpStepData } from '@/data/dummyDatas';

export default function MultiStepSignUp({
  handleSignUp,
}: {
  handleSignUp: (signUpFormData: FormData) => void;
}) {
  const router = useRouter();
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

  useEffect(() => {
    const isAllFieldsValid = requiredFields[step].every(
      (field) => !!inputValues[field] && !errorMessages[field]
    );
    setIsEnabled(isAllFieldsValid);
  }, [inputValues, errorMessages, step]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;

    setInputValues((prev) => {
      const updatedValues = { ...prev, [name]: value };
      const res = signUpSchema.safeParse(updatedValues);
      console.log(updatedValues);
      if (!res.success) {
        const fieldErrors: Partial<SignUpStoreStateType> = {};
        res.error.errors.forEach((error) => {
          const fieldName = error.path[0] as keyof SignUpStoreStateType;
          fieldErrors[fieldName] = error.message;
        });
        setErrorMessages(fieldErrors);
      } else {
        setErrorMessages({});
      }

      return updatedValues;
    });
  };

  // 엔터시 폼 전송되는 현상 방지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const prevStep = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const authMessages: Record<number, string[]> = {
    1: ['이메일과 비밀번호를', '입력해 주세요.'],
    2: ['유저 정보를', '입력해 주세요.'],
  };

  const requiredFields: Record<number, (keyof SignUpStoreStateType)[]> = {
    1: ['emailId', 'emailDomain', 'password', 'confirmPassword'],
    2: ['name', 'year', 'month', 'date', 'phoneNumber', 'gender'],
  };

  const signUpSteper = signUpStepData as SignUpStepType[];
  const [viewComponent, setViewComponent] = useState<SignUpStepType>();
  useEffect(
    () =>
      setViewComponent(
        signUpSteper.find((item: SignUpStepType) => item.stepId === step)
      ),
    [step, signUpSteper]
  );

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
      <form action={handleSignUp} onKeyDown={handleKeyDown}>
        <ul className="padded space-y-6">
          {viewComponent?.item({
            step,
            handleChange,
            errorMessages,
            inputValues,
          })}
        </ul>

        <CommonLayout.FixedButtonBgLayout>
          <CommonButton
            onClick={() =>
              viewComponent?.stepId === 1
                ? setStep(2)
                : router.push('sign-up-complete')
            }
            // onClick={() => setStep((prev) => prev + 1)}
            // isEnabled={isEnabled}
            isEnabled={true}
            type={viewComponent?.stepId === 1 ? 'button' : 'submit'}
          >
            다음
          </CommonButton>
        </CommonLayout.FixedButtonBgLayout>

        {/* 3 */}
        {/* <p className={`padded space-y-6 ${step === 3 ? '' : 'hidden'}`}>
          <CommonInput placeholder="인증번호" type="text" name="confirm" />
        </p> */}
      </form>
    </>
  );
}
