'use client';

import CommonInput from '@/components/ui/inputs/CommonInput';
import { InputErrorMessage } from '@/components/layouts/CommonLayout';
import { SignUpStoreStateType } from '@/types/storeDataTypes';

export default function SignUpPasswordInput({
  onChange,
  errorMessages,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
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
        />
        {errorMessages.confirmPassword && (
          <InputErrorMessage>{errorMessages.confirmPassword}</InputErrorMessage>
        )}
      </li>
    </>
  );
}
