import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import OauthLoginButtons from '@/components/pages/auth/signIn/OauthLoginButtons';
import SignInForm from '@/components/pages/auth/SignInForm';

export default function SignInPage() {
  return (
    <>
      <AuthGreeting type="signIn" className="padded" />

      <SignInForm />
      <OauthLoginButtons />
    </>
  );
}
