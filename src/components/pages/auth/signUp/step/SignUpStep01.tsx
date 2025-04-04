import React from 'react';
import SignUpEmailInput from '../SignUpEmailInput';
import SignUpPasswordInput from '../SignUpPasswordInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';

export default function SignUpStep01({
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
