import { CartProductType } from '@/types/ResponseDataTypes';
import CartItem from './CartItem';
import { dummyCartItems } from '@/data/dummyDatas';

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
  const userCartUuid = dummyCartItems[0].cartUuid;

  // 로그인된 유저의 장바구니 상품만 필터링
  const filteredItems = items.filter((item) => item.cartUuid === userCartUuid);

  return (
    <section>
      {filteredItems.map((item) => (
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
