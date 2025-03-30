import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import SignInForm from '@/components/pages/auth/SignInForm';

export default function SignInPage() {
  return (
    <>
      <AuthGreeting type="signIn" />

      <SignInForm />
    </>
  );
}
