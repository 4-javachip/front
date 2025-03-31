import AuthHeading from '@/components/ui/AuthHeading';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function VerificationPage() {
  return (
    <>
      <section className="padded">
        <AuthHeading>본인확인을 위헤</AuthHeading>
        <AuthHeading>인증을 진행해 주세요.</AuthHeading>
      </section>
      <ConfirmNextButton text="다음" href="/" />
    </>
  );
}
