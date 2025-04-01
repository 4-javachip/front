'use client';

import CommonInput from '@/components/ui/inputs/CommonInput';
import AuthEmailInput from './AuthEmailInput';

export default function SignUpAccountInput({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <AuthEmailInput />
      <CommonInput
        label="비밀번호 (10~20자리 이내)"
        type="password"
        id="password"
      />
      <CommonInput
        label="비밀번호 확인"
        type="password"
        id="confirm-password"
      />
    </>
  );
}
