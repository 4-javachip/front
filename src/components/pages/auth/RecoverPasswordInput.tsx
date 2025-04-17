'use client';

import { z } from 'zod';
import AuthHeading from './AuthHeading';
import { useEffect } from 'react';
import { ResetPasswordStateType } from '@/types/storeDataTypes';
import SignUpPasswordInput from './signUp/SignUpPasswordInput';

export default function RecoverPasswordInput({
  inputValues,
  setInputValues,
  setIsEnabled,
}: {
  inputValues: ResetPasswordStateType;
  setInputValues: React.Dispatch<React.SetStateAction<ResetPasswordStateType>>;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const passwordSchema = z
    .string()
    .min(10)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/)
    .regex(/[!@#$%^&*]/);

  useEffect(() => {
    const isPasswordValid = passwordSchema.safeParse(
      inputValues.password
    ).success;
    const isAllFieldsValid =
      isPasswordValid && inputValues.password === inputValues.confirmPassword;

    setIsEnabled(isAllFieldsValid);
  }, [inputValues, setIsEnabled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      const updatedValues = { ...prev, [name]: value };
      return updatedValues;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form onKeyDown={handleKeyDown} className="w-full h-full">
      <section className=" padded pb-14">
        <AuthHeading>변경할 비밀번호를</AuthHeading>
        <AuthHeading>입력해 주세요.</AuthHeading>
      </section>
      <ul className="padded space-y-6">
        <SignUpPasswordInput
          onChange={handleChange}
          inputValues={inputValues}
        />
      </ul>
    </form>
  );
}
