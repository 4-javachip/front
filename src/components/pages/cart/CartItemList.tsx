import CartItem from '@/components/ui/CartItem/CartItem';
import { CartItemListType } from '@/types/CartDataType';

interface CartItemListProps {
  cartItemList: CartItemListType[];
  cartItemName: string;
  option: string;
}

export default function CartItemList({ cartItemList }: CartItemListProps) {
  return (
    <ul>
      {cartItemList.map((item) => {
        const matched = cartItemList.find(
          (p) => p.productUuid === item.productUuid
        );

        return (
          <CartItem
            key={item.cartUuid}
            cartItem={item}
            name={cartItemList}
            size={80}
          />
        );
      })}
    </ul>
  );
}
