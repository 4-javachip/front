import { LogoIcon } from '@/components/ui/icons/LogoIcon';

export default function SignInPage() {
  return (
    <main>
      <LogoIcon />
      <div className="font-body font-semibold text-2xl">
        <h2>안녕하세요.</h2>
        <h2>스타벅스입니다.</h2>
      </div>
      <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
    </main>
  );
}
