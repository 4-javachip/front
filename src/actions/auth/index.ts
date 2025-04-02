'use server';
import { SignUpDataType } from '@/types/RequestDataTypes';

export async function signUpAction(signUpFormData: FormData) {
  const payload: SignUpDataType = {
    email: signUpFormData.get('email') as string,
    password: signUpFormData.get('password') as string,
    nickname: signUpFormData.get('nickname') as string,
    name: signUpFormData.get('name') as string,
    birthdate: signUpFormData.get('birthdate') as string,
    phoneNumber: signUpFormData.get('phoneNumber') as string,
    gender: signUpFormData.get('gender') as string,
  };

  console.log('Payload being sent to the API:', payload);
  // const response = await fetch(
  //   `${process.env.BASE_API_URL}/api/v1/user/sign-up`,
  //   {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(payload),
  //   }
  // );

  // if (!response.ok) {
  //   throw new Error('Failed to sign up');
  // }
  // return await response.json();
}
