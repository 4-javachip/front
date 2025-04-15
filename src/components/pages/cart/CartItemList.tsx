import CartItem from '@/components/ui/CartItem/CartItem';
import { ItemThumbSkeleton } from '@/components/ui/skeletons/ProductItemSkeleton';
import { CartItemType } from '@/types/CartDataType';
import { Suspense } from 'react';

interface CartItemListProps {
  cartItemList: CartItemType[];
}

export default function CartItemList({ cartItemList }: CartItemListProps) {
  return (
    <ul>
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
