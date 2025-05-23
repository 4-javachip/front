'use client';
import { Button } from '@/components/ui/button';
import AlertModal from '@/components/ui/dialogs/AlertModal';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function OauthLoginButtons() {
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';
  const signUpFailReason = searchParams.get('reason');

  const handleOauthLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await signIn(e.currentTarget.name, {
      redirect: false,
    });
    if (res?.ok) router.push(callbackUrl);
  };

  useEffect(() => {
    if (signUpFailReason === 'unregistered') {
      setModalErrorMessage(
        `소셜 계정이 존재하지 않습니다. 소셜 계정의 이메일 아이디를 이용해 회원가입을 진행합니다.`
      );
      setErrorModalOpen(true);
    }
  }, [signUpFailReason]);

  return (
    <>
      <AlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        errorMessage={modalErrorMessage}
        onConfirm={() => router.push(`/auth/oauth-sign-up`)}
      />
      <div className="padded flex flex-col space-y-3">
        <Button
          type="button"
          name="kakao"
          onClick={handleOauthLogin}
          className="bg-[#FEE500] text-[#000000] hover:bg-[#FEE500] cursor-pointer"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
            ></path>
          </svg>
          카카오 아이디로 로그인
        </Button>
        <Button
          type="button"
          name="google"
          onClick={handleOauthLogin}
          className="bg-white border border-gray-400 text-black hover:bg-white cursor-pointer"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="-3 0 262 262"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            />
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            />
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            />
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            />
          </svg>
          Google 계정으로 로그인
        </Button>
      </div>
    </>
  );
}
