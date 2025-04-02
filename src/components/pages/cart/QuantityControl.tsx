import MinusIcon from '@/components/ui/icons/MinusIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';

interface QuantityControlProps {
  quantity: number;
  // onClick: () => void;
}

export default function QuantityControl({ quantity }: QuantityControlProps) {
  return (
    <ul className="flex items-center  justify-between px-2">
      <li className="pr-4">
        <button type="button" className="flex justify-center items-center">
          <MinusIcon />
        </button>
      </li>
      <li className="pr-4 font-body font-semibold ">{quantity}</li>
      <li>
        <button type="button" className="flex justify-center items-center">
          <PlusIcon />
        </button>
      </li>
    </ul>
  );
}
