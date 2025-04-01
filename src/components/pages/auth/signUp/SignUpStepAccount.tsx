import AuthHeading from '@/components/ui/AuthHeading';
import SignUpAccountInput from './SignUpAccountInput';

export default function SignUpStepAccount() {
  return (
    <>
      <section className="padded pb-14">
        <AuthHeading>이메일과 비밀번호를</AuthHeading>
        <AuthHeading>입력해 주세요.</AuthHeading>
      </section>
      <SignUpAccountInput />
    </>
  );
}
