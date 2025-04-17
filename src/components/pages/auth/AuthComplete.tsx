'use client';

import AuthHeading from '@/components/pages/auth/AuthHeading';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'sign_up';
  const message =
    type === 'sign_up'
      ? '회원가입이 완료되었습니다.\n아이디로 로그인 해주세요.'
      : type === 'reset_password'
      ? '비밀번호 재설정이\n완료되었습니다.'
      : '잘못된 접근입니다.';
  return (
    <>
      <section className="padded">
        <AuthHeading className="whitespace-pre-line">{message}</AuthHeading>
      </section>
      <ConfirmNextButton
        onClick={() => {
          router.push('/auth/sign-in');
        }}
        isEnabled={() => true}
      >
        로그인하기
      </ConfirmNextButton>
    </>
  );
}
