import SignUpForm from '@/components/pages/auth/signUp/SignUpForm';
import AuthHeading from '@/components/ui/AuthHeading';

export default function SignUpPage() {
  return (
    <>
      <section className="padded pb-14">
        <AuthHeading>이메일과 비밀번호를</AuthHeading>
        <AuthHeading>입력해 주세요.</AuthHeading>
      </section>
      <SignUpForm />
    </>
  );
}
