import { signUpAction } from '@/actions/auth';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';

export default function SignUpPage() {
  const handleSignUp = async (signUpFormData: FormData) => {
    'use server';
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
