import React from 'react';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import SignUpPasswordInput from '../SignUpPasswordInput';

export default function SignUpStep02({
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
      <SignUpPasswordInput
        onChange={handleChange}
        errorMessages={errorMessages}
        inputValues={inputValues}
      />
    </>
  );
}
