import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import AuthTermsList from '@/components/pages/auth/AuthTermsList';

export default function TermsAgreementPage() {
  return (
    <>
      <AuthGreeting type="signUp" />
      <AuthTermsList />
    </>
  );
}
