import AuthHeading from '@/components/ui/AuthHeading';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';

export default function AuthGreeting() {
  return (
    <>
      <LogoIcon size={62} />
      <div
        className="font-body font-semibold text-2xl
    pt-6"
      >
        <AuthHeading>안녕하세요.</AuthHeading>
        <AuthHeading>스타벅스입니다.</AuthHeading>
      </div>
    </>
  );
}
