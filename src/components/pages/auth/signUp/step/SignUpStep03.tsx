import React, { useRef } from 'react';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import CommonInput from '@/components/ui/inputs/CommonInput';
import {
  sendEmailVerificationAction,
  verifyEmailCodeAction,
} from '@/actions/auth';

export default function SignUpStep03({
  step,
  handleChange,
  errorMessages,
  inputValues = {} as SignUpStoreStateType,
}: {
  step: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
  inputValues: SignUpStoreStateType;
}) {
  const email = `${inputValues.emailId}@${inputValues.emailDomain}`;

  // const handleVerifyCode = async () => {
  //   const code = codeInputRef.current?.value;
  //   if (!code) return;
  //   await verifyEmailCodeAction({ email, verificationCode: code });
  // };

  return (
    <>
      <CommonInput
        placeholder="인증번호 6자리"
        // type="password"
        // name="password"
        // onChange={onChange}
        maxLength={6}
        // value={inputValues?.password}
      />
    </>
  );
}
