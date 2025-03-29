'use client';

import FloatingInput from '@/components/ui/inputs/FloatingInput';

export default function SignInForm() {
  return (
    <form className="space-y-6">
      <FloatingInput label="아이디" id="loginId" />
      <FloatingInput label="비밀번호" id="password" />
      <button type="submit">로그인하기</button>
    </form>
  );
}
