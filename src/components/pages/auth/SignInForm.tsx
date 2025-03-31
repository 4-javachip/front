'use client';

import FloatingInput from '@/components/ui/inputs/FloatingInput';
import AuthLinkItem from './AuthLinkItem';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function SignInForm() {
  return (
    <form>
      <div className="padded space-y-6">
        <FloatingInput label="아이디" id="loginId" />
        <FloatingInput label="비밀번호" id="password" />

        <section className="w-full flex justify-center items-center pb-20">
          <div className="flex [&>*:not(:first-child)]:before:content-['|'] [&>*:not(:first-child)]:before:mx-2">
            <AuthLinkItem text="아이디 찾기" link="/find-id" />
            <AuthLinkItem text="비밀번호 찾기" link="/find-password" />
            <AuthLinkItem text="회원가입" link="/terms-agreement" />
          </div>
        </section>
      </div>

      <CommonLayout.FixedButtonBgLayout>
        <CommonButton onClick={() => {}} isEnabled={true}>
          로그인하기
        </CommonButton>
      </CommonLayout.FixedButtonBgLayout>
    </form>
  );
}
