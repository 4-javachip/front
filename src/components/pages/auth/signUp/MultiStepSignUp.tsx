'use client';

import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { useState } from 'react';
import SignUpStepAccount from './SignUpStepAccount';

export default function MultiStepSignUp() {
  const [step, setStep] = useState(1);
  const [inputValues, setInputValues] = useState<SignUpStoreStateType>({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    name: '',
    birthdate: '',
    phoneNumber: '',
    gender: '남성',
  });

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && (
        <div>
          {/* <h2 className="text-lg font-semibold mb-4">📧 이메일 입력</h2>
          <input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <button onClick={nextStep} className="mt-4 bg-blue-500 text-white p-2 rounded">
            다음
          </button> */}
          <SignUpStepAccount />
        </div>
      )}

      {step === 2 && <div>닉네임(선택)/이름/생일/전화번호/성별</div>}

      {step === 3 && <div>인증번호 전송 및 받기</div>}
    </div>
  );
}
