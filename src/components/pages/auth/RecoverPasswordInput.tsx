'use client';

import AuthHeading from './AuthHeading';
import { useEffect, useState } from 'react';
import { ResetPasswordStateType } from '@/types/storeDataTypes';
import SignUpPasswordInput from './signUp/SignUpPasswordInput';
import { confirmPasswordSchema } from '@/schemas/confirmPasswordSchema';

export default function RecoverPasswordInput({
  inputValues,
  setInputValues,
  setIsEnabled,
}: {
  inputValues: ResetPasswordStateType;
  setInputValues: React.Dispatch<React.SetStateAction<ResetPasswordStateType>>;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [passwordErrorMessages, setPasswordErrorMessages] = useState<
    Partial<ResetPasswordStateType>
  >({});

  useEffect(() => {
    const isAllFieldsValid =
      !!inputValues.password &&
      !!inputValues.confirmPassword &&
      !passwordErrorMessages.password &&
      !passwordErrorMessages.confirmPassword;

    setIsEnabled(isAllFieldsValid);
  }, [
    inputValues,
    passwordErrorMessages.confirmPassword,
    passwordErrorMessages.password,
    setIsEnabled,
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      const updatedValues = { ...prev, [name]: value };
      const res = confirmPasswordSchema.safeParse(updatedValues);

      if (!res.success) {
        const fieldErrors: Partial<ResetPasswordStateType> = {};
        res.error.errors.forEach((error) => {
          const fieldName = error.path[0] as keyof ResetPasswordStateType;
          fieldErrors[fieldName] = error.message;
        });
        setPasswordErrorMessages(fieldErrors);
      } else {
        setPasswordErrorMessages({});
      }

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
          errorMessages={passwordErrorMessages}
        />
      </ul>
    </form>
  );
}
