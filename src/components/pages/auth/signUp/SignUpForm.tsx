'use client';

import CommonInput from '@/components/ui/inputs/CommonInput';
import AuthEmailInput from './AuthEmailInput';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function SignUpForm() {
  return (
    <form>
      <section className="padded space-y-6">
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
      </section>
      <ConfirmNextButton text="다음" href="/" isEnabled={() => true} />
    </form>
  );
}
