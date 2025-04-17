import React from 'react';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import AuthPasswordInput from '../SignUpPasswordInput';

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
      <AuthPasswordInput
        onChange={handleChange}
        errorMessages={errorMessages}
        inputValues={inputValues}
      />
    </>
  );
}
