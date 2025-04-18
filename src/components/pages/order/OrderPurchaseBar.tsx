'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { CartItemPriceData, CartItemType } from '@/types/CartDataType';
import { useRouter } from 'next/navigation';

export interface CartPurchaseBarProps {
  cartItemPriceList: CartItemPriceData[];
  cartItemList: CartItemType[];
}

export default function OrderPurchaseBar() {
  const router = useRouter();

  const handlePurchase = () => {
    router.push('/payments');
  };
  return (
    <CommonLayout.FixedButtonBgLayout className="flex flex-col w-full py-4 gap-3">
      <CommonButton
        className="font-semibold"
        onClick={handlePurchase}
        isEnabled={true}
      >
        결제하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
