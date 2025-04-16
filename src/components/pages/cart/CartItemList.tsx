import CartItem from '@/components/ui/CartItem/CartItem';
import { ItemThumbSkeleton } from '@/components/ui/skeletons/ProductItemSkeleton';
import { CartItemType } from '@/types/CartDataType';
import { Suspense } from 'react';
import CartAllCheck from './CartAllCheck';
import CartDeleteButtons from '@/components/ui/buttons/CartDeleteButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';

interface CartItemListProps {
  cartItemList: CartItemType[];
  checked: boolean;
}

export default function CartItemList({
  cartItemList,
  checked,
}: CartItemListProps) {
  // const cartUuid = cartItemList.map((item) => item.cartUuid);
  return (
    <ul>
      {/* <div className="flex items-center justify-between mb-4 pt-4">
        <CartAllCheck checked={checked} />
        <CartDeleteButtons cartUuid={cartUuid} />
      </div> */}
      <CommonLayout.CommonBorder />
      {cartItemList.map((item) => (
        <Suspense
          key={item.productUuid}
          fallback={<ItemThumbSkeleton size={80} />}
        >
          <CartItem data={item} size={80} />
        </Suspense>
      ))}
    </ul>
  );
}
