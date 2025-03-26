import { CartProductType } from '@/types/ResponseDataTypes';
import QuantityControl from './QuantityControl';
import DeleteButton from '@/components/ui/buttons/DeleteButton';
import Checkbox from '@/components/ui/inputs/CheckBox';

interface CartItemProps {
  cartItem: CartProductType;
  onToggleCheck: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function CartItem({
  cartItem,
  onToggleCheck,
  onIncrease,
  onDecrease,
  onDelete,
}: CartItemProps) {
  const {
    id,
    productImageUrl,
    productName,
    productQuantity = 1,
    productPrice = 0,
    checkBox,
  } = cartItem;

  const formattedTotal = (productPrice * productQuantity).toLocaleString();

  return (
    <article
      className="flex items-start gap-3 py-3 px-6 border-b border-gray-200"
      aria-label={`${productName} 장바구니 항목`}
    >
      {/* ✅ 재사용 컴포넌트 사용 */}
      <Checkbox
        checked={checkBox}
        onChange={() => onToggleCheck(id)}
        className="mt-2"
        ariaLabel={`${productName} 선택`}
      />

      <figure>
        <img
          src={productImageUrl}
          alt={productName}
          className="w-20 h-20 rounded-md object-cover"
        />
      </figure>

      <section className="flex-1">
        <ul className="flex justify-between items-start mb-2">
          <li className="text-sm font-medium text-black">{productName}</li>
          <li>
            <DeleteButton onDelete={() => onDelete(id)} />
          </li>
        </ul>

        <ul className="flex justify-between items-center">
          <li>
            <QuantityControl
              quantity={productQuantity}
              onIncrease={() => onIncrease(id)}
              onDecrease={() => onDecrease(id)}
            />
          </li>
          <li>
            <span className="font-medium text-black">{formattedTotal}원</span>
          </li>
        </ul>
      </section>
    </article>
  );
}
