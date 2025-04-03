import React from 'react';

import { SignUpStoreStateType } from '@/types/storeDataTypes';
import SignUpEmailInput from './SignUpEmailInput';
import SignUpPasswordInput from './SignUpPasswordInput';
import SignUpProfileInput from './SignUpProfileInput';

export default function SignUpStep({
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
      {step === 1 && (
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
      )}

      {step === 2 && (
        <SignUpProfileInput
          onChange={handleChange}
          errorMessages={errorMessages}
          inputValues={inputValues}
        />
      )}
    </>
  );
}
