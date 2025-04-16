'use client';

import AuthHeading from '@/components/pages/auth/AuthHeading';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import { useRouter } from 'next/navigation';

export default function SignUpComplete() {
  const router = useRouter();
  return (
    <>
      <section className="padded">
        <AuthHeading>user님,</AuthHeading>
        <AuthHeading>회원가입이 완료되었습니다.</AuthHeading>
      </section>
      <ConfirmNextButton
        onClick={() => {
          router.push('/');
        }}
        isEnabled={() => true}
      >
        홈으로 가기
      </ConfirmNextButton>
    </>
  );
}
