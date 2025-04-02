'use client';

import AuthHeading from '@/components/ui/AuthHeading';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import { useRouter } from 'next/navigation';

export default function SignUpComplete() {
  const router = useRouter();
  return (
    <>
      <section className="padded">
        <AuthHeading>ㅇㅇㅇ님,</AuthHeading>
        <AuthHeading>회원가입이 완료되었습니다.</AuthHeading>
      </section>
      <ConfirmNextButton
        text="홈으로 가기"
        onClick={() => {
          router.push('/');
        }}
        isEnabled={() => true}
      />
    </>
  );
}
