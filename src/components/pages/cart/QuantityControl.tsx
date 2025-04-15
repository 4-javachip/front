import { updateCartItemQuantity } from '@/actions/cart-service';
import MinusIcon from '@/components/ui/icons/MinusIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';

interface QuantityControlProps {
  cartUuid: string;
  quantity: number;
}

export default function QuantityControl({
  quantity,
  cartUuid,
}: QuantityControlProps) {
  const handleQuantityChange = (type: string) => {
    const newQuantity = type === 'increase' ? quantity + 1 : quantity - 1;
    if (newQuantity < 1) return;
    console.log('New quantity:', newQuantity, cartUuid);
    updateCartItemQuantity(cartUuid, newQuantity);
  };
  return (
    <div className="w-fit flex items-center justify-start">
      <button
        type="button"
        disabled={quantity <= 1}
        name="decrease"
        onClick={() => handleQuantityChange('decrease')}
        className="flex justify-center items-center"
      >
        <MinusIcon />
      </button>
      <p className="font-body font-semibold w-10 text-center">{quantity}</p>

      <button
        type="button"
        name="increase"
        onClick={() => handleQuantityChange('increase')}
        className="flex justify-center items-center"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
