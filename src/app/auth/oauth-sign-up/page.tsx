import { oAuthSignUpAction } from '@/actions/auth';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { cookies } from 'next/headers';

export default async function SignUpPage() {
  const cookieStore = await cookies();
  const oauthCookie = cookieStore.get('oauth_cookie');

  if (!oauthCookie) {
    return (
      <NotFoundLayout
        message="잘못된 접근입니다."
        linkText="로그인 화면으로"
        linkHref="/auth/sign-in"
      />
    );
  }

  const handleOAuthSignUp = async (inputValues: SignUpStoreStateType) => {
    'use server';
    const {
      emailId,
      emailDomain,
      year,
      month,
      date,
      confirmPassword,
      emailVerificationCode,
      isEmailVerified,
      isEmailSent,
      isOptionalConsentChecked,
      ...rest
    } = inputValues;

    const formattedMonth = month.padStart(2, '0');
    const formattedDate = date.padStart(2, '0');
    const birthdate = `${year}-${formattedMonth}-${formattedDate}`;

    const payload = {
      ...rest,
      birthdate,
    };
    console.log(payload);

    const res = await oAuthSignUpAction(payload);
    console.log(res);

    if (res.success === false) {
      return { success: false, message: res.message };
    }
    return { success: true };
  };

  return (
    <>
      <MultiStepSignUp
        handleSignUp={handleOAuthSignUp}
        initialStep={2}
        type="oauth"
      />
    </>
  );
}
