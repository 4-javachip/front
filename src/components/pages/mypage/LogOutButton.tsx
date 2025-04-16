'use client';

import { LogoutAction } from '@/actions/auth';
import ConfirmModal from '@/components/ui/ConfirmModal';
import AlertModal from '@/components/ui/dialogs/AlertModal';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

export default function LogOutButton() {
  const [alertConfirmModalOpen, setConfirmAlertModalOpen] = useState(false);
  const [confirmModalMessage, setConfirmModalMessage] = useState('');
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogout = async () => {
    const res = await LogoutAction();
    if (res.success === false) {
      setModalMessage(`로그아웃 중 오류가 발생했습니다.: ${res.message}`);
      setAlertModalOpen(true);
    } else {
      await signOut({ redirect: true, callbackUrl: '/' });
    }
  };
  return (
    <>
      <ConfirmModal
        open={alertConfirmModalOpen}
        onOpenChange={setConfirmAlertModalOpen}
        title="알림"
        description={
          confirmModalMessage !== ''
            ? confirmModalMessage
            : '로그아웃 하시겠습니까?'
        }
        onConfirm={handleLogout}
      />
      <AlertModal
        open={alertModalOpen}
        onOpenChange={setAlertModalOpen}
        errorMessage={modalMessage}
      />
      <button
        type="button"
        onClick={() => {
          setConfirmModalMessage('');
          setConfirmAlertModalOpen(true);
        }}
        className="w-8 h-8 flex justify-center items-center cursor-pointer"
      >
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 19C0.999998 17.6081 1.36317 16.2402 2.05363 15.0316C2.74409 13.823 3.73794 12.8155 4.93699 12.1085C6.13604 11.4016 7.49879 11.0198 8.89059 11.0007C10.2824 10.9817 11.6551 11.3261 12.873 12M16 15L21 20M21 15L16 20M14 6C14 8.76142 11.7614 11 9 11C6.23858 11 4 8.76142 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6Z"
            stroke="#666767"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
