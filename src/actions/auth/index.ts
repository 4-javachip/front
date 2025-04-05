'use server';
import { SignUpDataType } from '@/types/RequestDataTypes';
import { AgreementType } from '@/types/ResponseDataTypes';

export async function signUpAction(signUpFormData: FormData) {
  const payload: Partial<SignUpDataType> = {
    email: signUpFormData.get('email') as string,
    password: signUpFormData.get('password') as string,
    name: signUpFormData.get('name') as string,
    birthdate: signUpFormData.get('birthdate') as string,
    phoneNumber: signUpFormData.get('phoneNumber') as string,
    gender: signUpFormData.get('gender') as string,
  };

  const nickname = signUpFormData.get('nickname');
  if (nickname !== null && nickname !== undefined && nickname !== '') {
    payload.nickname = nickname as string;
  }

  console.log('Payload being sent to the API:', payload);
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/user/sign-up`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Sign-up failed:', errorData);
    throw new Error(errorData.message);
  }

  return await response.json();
}

export async function getSignUpAgreementData(): Promise<AgreementType[]> {
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/agreement/sign-up`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    console.error('Failed to fetch sign up agreement data:', errorData);
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data.result as AgreementType[];
}

export async function sendEmailVerificationAction({
  email,
}: {
  email: string;
}) {
  const payload = {
    email,
  };

  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/email/send-code`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('이메일 인증 코드 전송 실패: ', errorData);
    throw new Error(errorData.message);
  }

  return await response.json();
}

export async function verifyEmailCodeAction({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) {
  const payload = {
    email,
    verificationCode,
  };

  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/email/verify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('이메일 인증 실패: ', errorData);
    throw new Error(errorData.message);
  }

  return await response.json();
}
