import { getSignUpAgreementData } from '@/actions/auth';
import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import AuthTermsList from '@/components/pages/auth/AuthTermsList';

export default async function TermsAgreementPage() {
  const agreements = await getSignUpAgreementData();
  console.log(agreements);
  return (
    <>
      <AuthGreeting type="signUp" />
      <AuthTermsList agreements={agreements} />
    </>
  );
}
