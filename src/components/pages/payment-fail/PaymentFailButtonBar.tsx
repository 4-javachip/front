'use client';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { redirect } from 'next/navigation';

export default function PaymentFatilButtonBar() {
  const handleClick = async () => {
    redirect('/cart');
  };

  const handleClickMain = async () => {
    redirect('/');
  };

  return (
    <CommonLayout.FixedButtonBgLayout className="flex justify-between w-full py-4 gap-3 ">
      <CommonButton
        className="font-semibold bg-white border border-green text-green"
        onClick={handleClick}
        isEnabled={true}
      >
        장바구니로
      </CommonButton>
      <CommonButton
        className="font-semibold"
        onClick={handleClickMain}
        isEnabled={true}
      >
        메인으로
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
