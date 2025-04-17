'use client';
import { oAuthSignUpAction, signUpAction } from '@/actions/auth';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';
import {
  OAuthSignUpStoreStateType,
  SignUpStoreStateType,
} from '@/types/storeDataTypes';

export default function page() {
  // const handleSignUp = async (inputValues: OAuthSignUpStoreStateType) => {
  //   'use server';
  //   const { year, month, date, confirmPassword, ...rest } = inputValues;

  //   const formattedMonth = month.padStart(2, '0');
  //   const formattedDate = date.padStart(2, '0');
  //   const birthdate = `${year}-${formattedMonth}-${formattedDate}`;

  //   const payload = {
  //     ...rest,
  //     birthdate,
  //   };
  //   console.log(payload);

  //   const res = await oAuthSignUpAction(payload);
  //   console.log(res);

  //   if (res.success === false) {
  //     return { success: false, message: res.message };
  //   } else {
  //     return { success: true };
  //   }
  // };
  const onClick = async () => {
    const dummyData = {
      password: 'dummyPassword123!',
      name: '이름hkj',
      nickname: 'dummyNick',
      phoneNumber: '010-1666-5678',
      birthdate: '1990-01-01',
      gender: '남성',
    };

    try {
      console.log('Payload being sent to the API:', dummyData);
      const response = await fetch(
        `${process.env.BASE_API_URL}/api/v1/oauth/sign-up`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dummyData),
          credentials: 'include',
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Sign-up failed:', errorData);
        return { success: false, message: errorData.message };
      }

      return await response.json();

      // const result = await oAuthSignUpAction(dummyData);
      // console.log('회원가입 결과:', result);
    } catch (e) {
      console.log('실패');
    }
  };
  const onClickServer = async () => {
    const dummyData = {
      password: 'dummyPassword123!',
      name: '이름hkj',
      nickname: 'dummyNick',
      phoneNumber: '010-1666-5678',
      birthdate: '1990-01-01',
      gender: '남성',
    };
    const result = await oAuthSignUpAction(dummyData);
    console.log('회원가입 결과:', result);
  };

  return (
    <>
      {/* <MultiStepSignUp handleSignUp={handleSignUp} /> */}
      <button onClick={onClick}>클라이언트</button>
      <button onClick={onClickServer}>서버</button>
    </>
  );
}
