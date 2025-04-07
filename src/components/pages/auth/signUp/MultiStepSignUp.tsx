'use client';

import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { useEffect, useState } from 'react';
import { signUpSchema } from '@/schemas/signUpSchema';
import { useRouter } from 'next/navigation';
import { SignUpStepType } from '@/types/initialDataTypes';
import { signUpStepData } from '@/data/initialDatas';
import AuthHeading from '@/components/ui/AuthHeading';
import BackIconHeader from '@/components/layouts/BackIconHeader';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import ErrorAlertModal from '@/components/ui/ErrorAlertModal';
import TermsAgreementPage from '@/app/auth/terms-agreement/page';
import TermsAgreements from './TermsAgreements';

export default function MultiStepSignUp({
  handleSignUp,
}: {
  handleSignUp: (inputValues: SignUpStoreStateType) => Promise<void>;
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
    nickname: '',
    year: '',
    month: '',
    date: '',
    phoneNumber: '',
    gender: '남성',
    emailVerificationCode: '',
  });
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpStoreStateType>
  >({});
  const signUpSteper = signUpStepData as SignUpStepType[];
  const [viewComponent, setViewComponent] = useState<SignUpStepType>();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  useEffect(() => {
    const currentStep = signUpSteper.find((item) => item.stepId === step);
    if (!currentStep) return;

    const isAllFieldsValid = currentStep.requiredFields.every(
      (field) => !!inputValues[field] && !errorMessages[field]
    );
    setIsEnabled(isAllFieldsValid);
  }, [inputValues, errorMessages, step, signUpSteper]);

  useEffect(
    () =>
      setViewComponent(
        signUpSteper.find((item: SignUpStepType) => item.stepId === step)
      ),
    [step, signUpSteper]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSignUp(inputValues);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const nextStep = async () => {
    try {
      if (viewComponent?.stepId === 3) {
        // await handleVerifyCode();
        // await handleSignUp(inputValues);
        router.push('sign-up-complete');
      } else {
        if (viewComponent?.stepId === 1) {
          // const success = await handleSendEmailVerification();
          // if (!success) return;
        }
        setStep((prev) => prev + 1);
      }
    } catch (error) {
      const message =
        (error as { message?: string })?.message ??
        '알 수 없는 오류가 발생했습니다.';
      setModalErrorMessage(message);
      setErrorModalOpen(true);
    }
  };

  const prevStep = () => {
    if (step === 1) {
      router.push('terms-agreement');
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleModalConfirm = () => {
    setErrorModalOpen(false);
    setStep(1);
  };

  return (
    <>
      <ErrorAlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        onConfirm={handleModalConfirm}
        errorMessage={modalErrorMessage}
      />
      <BackIconHeader onClick={prevStep} />
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <section className=" padded pb-14">
          {viewComponent?.messages?.map((message: string, index: number) => (
            <AuthHeading key={index}>{message}</AuthHeading>
          ))}
        </section>
        <ul className="padded space-y-6">
          {viewComponent?.item({
            step,
            handleChange,
            errorMessages,
            inputValues,
          })}
        </ul>
        <ConfirmNextButton
          onClick={nextStep}
          // isEnabled={() => isEnabled}
          isEnabled={() => true}
          type="button"
          text="다음"
        />
      </form>
    </>
  );
}
