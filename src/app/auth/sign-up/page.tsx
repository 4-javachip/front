import { signUpAction } from '@/actions/auth';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';
import { SignUpStoreStateType } from '@/types/storeDataTypes';

export default function SignUpPage() {
  const handleSignUp = async (inputValues: SignUpStoreStateType) => {
    'use server';
    const { emailId, emailDomain, year, month, date, ...rest } = inputValues;

    const email = `${emailId}@${emailDomain}`;
    const formattedMonth = month.padStart(2, '0');
    const formattedDate = date.padStart(2, '0');
    const birthdate = `${year}-${formattedMonth}-${formattedDate}`;

    const formData = new FormData();
    Object.entries({ ...rest, email, birthdate }).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    console.log(formData);
    const res = await signUpAction(formData);
    console.log(res);
  };

  return (
    <>
      <MultiStepSignUp handleSignUp={handleSignUp} />
    </>
  );
}
