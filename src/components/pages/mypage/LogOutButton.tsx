'use client';
import { LogoutAction } from '@/actions/auth';
import { getSession, signOut } from 'next-auth/react';

export default function LogOutButton() {
  const handleLogout = async () => {
    try {
      const session = await getSession();
      const refreshToken = session?.user.refreshToken;
      await LogoutAction({ refreshToken });
      const res = await signOut({ redirect: true, callbackUrl: '/' });
      console.log(res);
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };
  return (
    <button type="button" onClick={handleLogout} className="cursor-pointer">
      로그아웃
    </button>
  );
}
