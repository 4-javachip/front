import MinusIcon from '@/components/ui/icons/MinusIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityControlProps) {
  return (
    <ul className="flex items-center  justify-between px-2">
      <li className="pr-4">
        <button
          type="button"
          onClick={onDecrease}
          className="flex justify-center items-center"
        >
          <MinusIcon />
        </button>
      </li>
      <li className="pr-4 font-inter font-semibold ">{quantity}</li>
      <li>
        <button
          type="button"
          onClick={onIncrease}
          className="flex justify-center items-center"
        >
          <PlusIcon />
        </button>
      </li>
    </ul>
  );
}
