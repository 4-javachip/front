import { signUpAction } from '@/actions/auth';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';
import { SignUpStoreStateType } from '@/types/storeDataTypes';

export default function SignUpPage() {
  const handleSignUp = async (inputValues: SignUpStoreStateType) => {
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

    const email = `${emailId}@${emailDomain}`;
    const formattedMonth = month.padStart(2, '0');
    const formattedDate = date.padStart(2, '0');
    const birthdate = `${year}-${formattedMonth}-${formattedDate}`;

    const payload = {
      ...rest,
      email,
      birthdate,
    };
    console.log(payload);

    const res = await signUpAction(payload);
    console.log(res);

    if (res.success === false) {
      return { success: false, message: res.message };
    } else {
      return { success: true };
    }
  };

  return (
    <>
      <MultiStepSignUp handleSignUp={handleSignUp} type="default" />
    </>
  );
}
