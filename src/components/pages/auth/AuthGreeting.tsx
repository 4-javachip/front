import AuthHeading from '@/components/pages/auth/AuthHeading';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';

export default function AuthGreeting({ type }: { type: string }) {
  return (
    <section className="padded">
      <LogoIcon size={62} />
      <div className="font-body font-semibold text-2xl pt-6 pb-14">
        {type === 'signUp' ? (
          <>
            <AuthHeading>고객님</AuthHeading>
            <AuthHeading>환영합니다!</AuthHeading>
          </>
        ) : (
          <>
            <AuthHeading>안녕하세요.</AuthHeading>
            <AuthHeading>스타벅스입니다.</AuthHeading>
          </>
        )}
        {type === 'signIn' && (
          <p className="font-medium text-[0.875rem] text-lightGray-1 pt-3">
            회원 서비스 이용을 위해 로그인 해주세요.
          </p>
        )}
      </div>
    </section>
  );
}
