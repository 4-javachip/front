import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import AuthTermsList from '@/components/pages/auth/AuthTermsList';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function SignUpPage() {
  return (
    <>
      <AuthGreeting type="signUp" />
      <AuthTermsList />
      <ConfirmNextButton text="다음" href="" />
    </>
  );
}
