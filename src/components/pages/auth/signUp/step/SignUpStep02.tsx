import React from 'react';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import SignUpProfileInput from '../SignUpProfileInput';

export default function SignUpStep02({
  step,
  handleChange,
  errorMessages,
}: {
  step: number;
  handleChange: () => void;
  errorMessages: Partial<SignUpStoreStateType>;
}) {
  return (
    <>
      <SignUpProfileInput
        onChange={handleChange}
        errorMessages={errorMessages}
      />
    </>
  );
}
