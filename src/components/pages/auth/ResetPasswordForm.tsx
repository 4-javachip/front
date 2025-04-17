'use client';

import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import RecoverEmailVerify from './RecoverEmailVerify';
import Loader from '@/components/ui/loaders/loader';
import { useState } from 'react';
import {
  EmailVerifyStateType,
  ResetPasswordStateType,
} from '@/types/storeDataTypes';
import RecoverPasswordInput from './RecoverPasswordInput';
import { resetUserPasswordAction } from '@/actions/auth';
import AlertModal from '@/components/ui/dialogs/AlertModal';
import { useRouter } from 'next/navigation';

export default function ResetPasswordForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');
  const [verifyInputValues, setVerifyInputValues] =
    useState<EmailVerifyStateType>({
      emailId: '',
      emailDomain: 'gmail.com',
      emailVerificationCode: '',
      isEmailVerified: '',
      isEmailSent: '',
    });
  const [passwordInputValues, setPasswordInputValues] =
    useState<ResetPasswordStateType>({
      password: '',
      confirmPassword: '',
    });

  const nextStep = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsLoading(true);

      const email = `${verifyInputValues.emailId}@${verifyInputValues.emailDomain}`;
      const res = await resetUserPasswordAction({
        email,
        newPassword: passwordInputValues.password,
        confirmPassword: passwordInputValues.confirmPassword,
      });
      console.log(res);
      if (res.success === false) {
        const message =
          res.message ??
          '비밀번호 변경 중 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
        setModalErrorMessage(message);
        setErrorModalOpen(true);
      } else {
        router.push('auth-complete?type=reset_password');
      }
      setIsLoading(false);
    }
  };

  return (
    <main>
      <AlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        errorMessage={modalErrorMessage}
      />
      <>
        {step === 1 ? (
          <RecoverEmailVerify
            inputValues={verifyInputValues}
            setInputValues={setVerifyInputValues}
            setIsEnabled={setIsEnabled}
            purpose="password_reset"
          />
        ) : (
          <RecoverPasswordInput
            inputValues={passwordInputValues}
            setInputValues={setPasswordInputValues}
            setIsEnabled={setIsEnabled}
          />
        )}
      </>

      <ConfirmNextButton
        onClick={nextStep}
        isEnabled={() => isEnabled}
        type="button"
      >
        {isLoading ? <Loader /> : '다음'}
      </ConfirmNextButton>
    </main>
  );
}
