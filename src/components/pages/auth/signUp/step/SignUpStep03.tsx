import React from 'react';
import SignUpEmailInput from '../SignUpEmailInput';
import SignUpPasswordInput from '../SignUpPasswordInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import CommonInput from '@/components/ui/inputs/CommonInput';

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
