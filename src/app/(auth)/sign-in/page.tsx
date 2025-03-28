import AuthGreeting from '@/components/pages/auth/AuthGreeting';

export default function SignInPage() {
  return (
    <main>
      <AuthGreeting />
      <p
        className="font-medium text-[0.875rem] text-lightGray-1
      pt-3"
      >
        회원 서비스 이용을 위해 로그인 해주세요.
      </p>
    </main>
  );
}
