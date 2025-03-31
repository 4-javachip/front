import AuthEmailInput from '@/components/pages/auth/AuthEmailInput';
import AuthHeading from '@/components/ui/AuthHeading';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function SignUpPage() {
  return (
    <>
      <section className="padded pb-14">
        <AuthHeading>이메일과 비밀번호를</AuthHeading>
        <AuthHeading>입력해 주세요.</AuthHeading>
      </section>
      <section className="padded space-y-6">
        <AuthEmailInput />
      </section>
      <ConfirmNextButton text="다음" href="/" />
    </>
  );
}
