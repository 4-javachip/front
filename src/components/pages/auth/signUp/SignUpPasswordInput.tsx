'use client';

import CommonInput from '@/components/ui/inputs/CommonInput';
import { InputErrorMessage } from '@/components/layouts/CommonLayout';
import { SignUpStoreStateType } from '@/types/storeDataTypes';

export default function SignUpPasswordInput({
  onChange,
  errorMessages,
  inputValues,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
  inputValues?: SignUpStoreStateType;
}) {
  return (
    <>
      <li>
        <CommonInput
          placeholder="비밀번호 (10~20자리 이내)"
          type="password"
          name="password"
          onChange={onChange}
          maxLength={20}
          value={inputValues?.password}
        />
        {errorMessages.password && (
          <InputErrorMessage>{errorMessages.password}</InputErrorMessage>
        )}
      </li>
      <li>
        <CommonInput
          placeholder="비밀번호 확인"
          type="password"
          name="confirmPassword"
          onChange={onChange}
          maxLength={20}
          value={inputValues?.confirmPassword}
        />
        {errorMessages.confirmPassword && (
          <InputErrorMessage>{errorMessages.confirmPassword}</InputErrorMessage>
        )}
      </li>
    </>
  );
}
