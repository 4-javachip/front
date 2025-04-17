'use client';

import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import RecoverEmailVerify from './RecoverEmailVerify';
import Loader from '@/components/ui/loaders/loader';
import { useState } from 'react';
import {
  EmailVerifyStateType,
  ResetPasswordStateType,
} from '@/types/storeDataTypes';
import AuthPasswordInput from './signUp/SignUpPasswordInput';

export default function ResetPasswordForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
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

  return (
    <main>
      {step === 1 ? (
        <RecoverEmailVerify
          inputValues={verifyInputValues}
          setInputValues={setVerifyInputValues}
          setIsEnabled={setIsEnabled}
          purpose="password_reset"
        />
      ) : (
        <AuthPasswordInput
          onChange={() => {}}
          inputValues={passwordInputValues}
        />
      )}

      <ConfirmNextButton
        onClick={() => setStep(2)}
        isEnabled={() => isEnabled}
        type="button"
      >
        {isLoading ? <Loader /> : '다음'}
      </ConfirmNextButton>
    </main>
  );
}
