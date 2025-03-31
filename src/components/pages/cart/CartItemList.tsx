import { CartProductType } from '@/types/ResponseDataTypes';
import CartItem from './CartItem';
import { dummyCartItems } from '@/data/dummyDatas';
import CartAllCheckBar from './CartAllCheckBar';

interface Props {
  items: CartProductType[];
  onToggleCheck: (productOptionListUuid: string) => void;
  onIncrease: (productOptionListUuid: string) => void;
  onDecrease: (productOptionListUuid: string) => void;
  onDelete: (productOptionListUuid: string) => void;
  isAllChecked: boolean;
  onToggleAll: () => void;
  onDeleteSelected: () => void;
  onDeleteAll: () => void;
}

export default function CartItemList({
  items,
  onToggleCheck,
  onIncrease,
  onDecrease,
  onDelete,
  isAllChecked,
  onToggleAll,
  onDeleteSelected,
  onDeleteAll,
}: Props) {
  const userUuid = dummyCartItems[0].userUuid;

  // 로그인 유저의 장바구니 상품만 필터링
  const filteredItems = items.filter((item) => item.userUuid === userUuid);

  return (
    <section>
      <CartAllCheckBar
        isAllChecked={isAllChecked}
        onToggleAll={onToggleAll}
        onDeleteSelected={onDeleteSelected}
        onDeleteAll={onDeleteAll}
      />
      {filteredItems.map((item) => (
        <CartItem
          key={item.productOptionListUuid}
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
