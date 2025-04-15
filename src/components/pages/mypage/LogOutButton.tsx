'use client';

import { LogoutAction } from '@/actions/auth';
import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  const handleLogout = async () => {
    const res = await LogoutAction();
    if (res.success) {
      await signOut({ redirect: true, callbackUrl: '/' });
    } else {
      // 모달을 띄우도록 수정
      console.log('로그아웃 중 오류가 발생했습니다.: ', res.message);
    }
  };
  return (
    <button type="button" onClick={handleLogout} className="cursor-pointer">
      로그아웃
    </button>
  );
}
