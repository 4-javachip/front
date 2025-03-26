import { CartProductType } from '@/types/ResponseDataTypes';
import CartItem from './CartItem';

interface Props {
  items: CartProductType[];
  onToggleCheck: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function CartItemList({
  items,
  onToggleCheck,
  onIncrease,
  onDecrease,
  onDelete,
}: Props) {
  return (
    <section aria-label="장바구니 상품 목록">
      {items.map((item) => (
        <CartItem
          key={item.id}
          cartItem={item}
          onToggleCheck={onToggleCheck}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
