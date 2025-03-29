import AuthHeading from '@/components/ui/AuthHeading';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';

export default function AuthGreeting() {
  return (
    <section className="padded">
      <LogoIcon size={62} />
      <div
        className="font-body font-semibold text-2xl
    pt-6 pb-14"
      >
        <AuthHeading>안녕하세요.</AuthHeading>
        <AuthHeading>스타벅스입니다.</AuthHeading>
        <p
          className="font-medium text-[0.875rem] text-lightGray-1
      pt-3"
        >
          회원 서비스 이용을 위해 로그인 해주세요.
        </p>
      </div>
    </section>
  );
}
