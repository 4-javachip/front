'use client';

import React, { useState, useEffect } from 'react';
import { getWishlistChecked, toggleWishlist } from '@/actions/wishlist-service';
import AlertModal from '@/components/ui/dialogs/AlertModal';

export default function WishButton({ productUuid }: { productUuid: string }) {
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const fetchChecked = async () => {
      try {
        const isChecked = await getWishlistChecked(productUuid);
        setChecked(isChecked);
      } catch (err) {
        console.error('초기 찜 상태 조회 실패', err);
      }
    };
    fetchChecked();
  }, [productUuid]);

  const handleClick = async () => {
    try {
      // API 먼저 호출
      const result = await toggleWishlist(productUuid);

      // 실패 시 모달 띄우기
      if (!result.success) {
        setModalMessage(result.message);
        setModalOpen(true);
        return;
      }

      // 성공 시 상태 변경
      const isChecked = await getWishlistChecked(productUuid);
      setChecked(isChecked);
    } catch (err) {
      console.error('찜 처리 중 에러', err);
      setModalMessage('알 수 없는 오류가 발생했습니다.');
      setModalOpen(true);
    }
  };

  return (
    <>
      <AlertModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        errorMessage={modalMessage}
        isOverLayHidden={true}
      />

      <label className="relative inline-block w-7 h-7 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleClick}
          className="appearance-none w-full h-full"
        />
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill={checked ? 'red' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 pointer-events-none"
        >
          <path
            d="M14 5.83333C15.75 4.08333 17.1967 3.5 19.25 3.5C20.9518 3.5 22.5839 4.17604 23.7873 5.3794C24.9906 6.58276 25.6667 8.21486 25.6667 9.91667C25.6667 12.5883 23.905 14.63 22.1667 16.3333L14 24.5L5.83333 16.3333C4.08333 14.6417 2.33333 12.6 2.33333 9.91667C2.33333 8.21486 3.00937 6.58276 4.21273 5.3794C5.41609 4.17604 7.04819 3.5 8.75 3.5C10.8033 3.5 12.25 4.08333 14 5.83333Z"
            stroke="#646464"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </>
  );
}
