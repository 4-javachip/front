'use client';

import Loader from '@/components/ui/loaders/loader';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function QrSignInTrigger() {
  const router = useRouter();

  useEffect(() => {
    const signInWithQr = async () => {
      const res = await signIn('credentials', {
        email: 'qr_code_sign_in',
        password: 'qwerty1234!',
        redirect: false,
      });
      if (res?.ok) {
        router.push('/');
      }
    };

    signInWithQr();
  }, [router]);

  return (
    <div className="flex justify-center items-center pt-40">
      <p className="me-3">로그인 중...</p>
      <Loader size="8" />
    </div>
  );
}
