'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { CartItemPriceData, CartItemType } from '@/types/CartDataType';
import { useRouter } from 'next/navigation';

export interface CartPurchaseBarProps {
  cartItemPriceList: CartItemPriceData[];
  cartItemList: CartItemType[];
}

export default function CartPurchaseBar({
  cartItemPriceList,
  cartItemList,
}: CartPurchaseBarProps) {
  const router = useRouter();
  const totalPrice = cartItemPriceList.reduce<number>((sum, item) => {
    return sum + item.productSalePrice;
  }, 0);

  const selectedItems = cartItemList.filter((item) => item.checked);

  const quantity = selectedItems.reduce((sum, item) => {
    return sum + item.productQuantity;
  }, 0);

  const handlePurchase = () => {
    router.push('/order');
  };
  return (
    <CommonLayout.FixedButtonBgLayout className="flex flex-col w-full py-4 gap-3">
      <ul className="flex justify-between items-center w-full px-6 font-semibold">
        <li className="text-sm">
          총
          <span className="text-green text-sm">
            {' '}
            {Math.floor(quantity).toLocaleString()}
          </span>
          건
        </li>
        <li>
          <span className="text-[22px]">
            {Math.floor(totalPrice).toLocaleString()}{' '}
          </span>
          원
        </li>
      </ul>
      <CommonButton
        className="font-semibold"
        onClick={handlePurchase}
        isEnabled={true}
      >
        구매하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
