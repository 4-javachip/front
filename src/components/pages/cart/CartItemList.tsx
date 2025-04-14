import CartItem from '@/components/ui/CartItem/CartItem';
import { CartItemListType, CartProductItemType } from '@/types/CartDataType';

interface CartItemListProps {
  cartItemList: CartItemListType[];
  productNameList: CartProductItemType[];
}

export default function CartItemList({
  cartItemList,
  productNameList,
}: CartItemListProps) {
  return (
    <ul>
      {cartItemList.map((item) => {
        const matched = productNameList.find(
          (p) => p.productUuid === item.productUuid
        );

        return (
          <CartItem
            key={item.cartUuid}
            cartItem={item}
            name={matched?.name ?? '상품명 없음'}
            size={80}
          />
        );
      })}
    </ul>
  );
}
