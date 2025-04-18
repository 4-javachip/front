'use client';

import FloatingInput from '@/components/ui/inputs/FloatingInput';
import AuthLinkItem from './AuthLinkItem';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { SignInStoreStateType } from '@/types/storeDataTypes';
import { signInSchema } from '@/schemas/signInSchema';
import { useRouter, useSearchParams } from 'next/navigation';
import AlertModal from '@/components/ui/dialogs/AlertModal';
import Loader from '@/components/ui/loaders/loader';

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputValues, setInputValues] = useState<SignInStoreStateType>({
    email: '',
    password: '',
  });
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  useEffect(() => {
    const result = signInSchema.safeParse(inputValues);
    setIsEnabled(result.success);
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      console.log('formData', formData);

      const res = await signIn('credentials', {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        redirect: false,
      });

      if (res?.ok) {
        router.push(callbackUrl);
        setIsLoading(false);
      } else {
        const message =
          res?.error ??
          '로그인 중 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
        setModalErrorMessage(message);
        setErrorModalOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      //
      setIsLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        errorMessage={modalErrorMessage}
      />
      <form onSubmit={handleSubmit}>
        <div className="padded space-y-6">
          <FloatingInput
            label="이메일"
            id="email"
            name="email"
            onChange={handleChange}
          />
          <FloatingInput
            label="비밀번호"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <section className="w-full flex justify-center items-center pb-14">
            <div className="flex [&>*:not(:first-child)]:before:content-['|'] [&>*:not(:first-child)]:before:mx-2">
              <AuthLinkItem text="비밀번호 변경" link="/reset-password" />
              <AuthLinkItem text="회원가입" link="/terms-agreement" />
            </div>
          </section>
        </div>

        <CommonLayout.FixedButtonBgLayout>
          <CommonButton onClick={() => {}} isEnabled={isEnabled} type="submit">
            {isLoading ? <Loader /> : '로그인하기'}
          </CommonButton>
        </CommonLayout.FixedButtonBgLayout>
      </form>
    </>
  );
}
