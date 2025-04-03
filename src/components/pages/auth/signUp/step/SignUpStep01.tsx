import React from 'react';
import SignUpEmailInput from '../SignUpEmailInput';
import SignUpPasswordInput from '../SignUpPasswordInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';

export default function SignUpStep01({
  step,
  handleChange,
  errorMessages,
  inputValues,
}: {
  step: number;
  handleChange: () => void;
  errorMessages: Partial<SignUpStoreStateType>;
  inputValues?: SignUpStoreStateType;
}) {
  return (
    <>
      <SignUpEmailInput
        onChange={handleChange}
        errorMessages={errorMessages}
        inputValues={inputValues}
      />
      <SignUpPasswordInput
        onChange={handleChange}
        errorMessages={errorMessages}
        inputValues={inputValues}
      />
    </>
  );
}
