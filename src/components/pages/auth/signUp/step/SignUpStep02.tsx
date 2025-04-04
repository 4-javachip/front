import React from 'react';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import SignUpProfileInput from '../SignUpProfileInput';

export default function SignUpStep02({
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
  return (
    <>
      <SignUpProfileInput
        onChange={handleChange}
        errorMessages={errorMessages}
        inputValues={inputValues}
      />
    </>
  );
}
