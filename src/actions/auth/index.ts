'use server';
import { SignUpDataType } from '@/types/RequestDataTypes';

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
    throw new Error(errorData.message || 'Failed to sign up');
  }

  return await response.json();
}
