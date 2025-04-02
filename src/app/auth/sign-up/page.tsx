import { signUpAction } from '@/actions/auth';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';

export default function SignUpPage() {
  const handleSignUp = async (signUpFormData: FormData) => {
    'use server';

    const emailId = signUpFormData.get('emailId') as string;
    const emailDomain = signUpFormData.get('emailDomain') as string;
    const year = signUpFormData.get('year') as string;
    const month = signUpFormData.get('month') as string;
    const date = signUpFormData.get('date') as string;

    const email = `${emailId}@${emailDomain}`;

    const formattedMonth = month.padStart(2, '0');
    const formattedDate = date.padStart(2, '0');

    const birthdate = `${year}-${formattedMonth}-${formattedDate}`;

    signUpFormData.append('email', email);
    signUpFormData.append('birthdate', birthdate);

    console.log(signUpFormData);
    const res = await signUpAction(signUpFormData);
    console.log(res);
  };

  return (
    <>
      <MultiStepSignUp handleSignUp={handleSignUp} />
    </>
  );
}
