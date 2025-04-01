import SignUpAccountInput from '@/components/pages/auth/signUp/SignUpAccountInput';
import AuthHeading from '@/components/ui/AuthHeading';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function SignUpPage() {
  return (
    <>
      <section className="padded pb-14">
        <AuthHeading>이메일과 비밀번호를</AuthHeading>
        <AuthHeading>입력해 주세요.</AuthHeading>
      </section>
      <form>
        <SignUpAccountInput />
      </form>
      <ConfirmNextButton text="다음" href="/" />
    </>
  );
}
