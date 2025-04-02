import { CartListDataType, CartProductType } from '@/types/ResponseDataTypes';
import CartItem from './CartItem';
import CartAllCheckBar from './CartAllCheckBar';

export default function CartItemList({ data }: { data: CartListDataType[] }) {
  return (
    <section>
      <CartAllCheckBar isAllChecked={true} />
      {data.map((item: CartListDataType) => (
        <CartItem key={item.cartUuid} item={item} />
      ))}
    </section>
  );
}
