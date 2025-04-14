import { ProductOptionType } from '@/types/ProductResponseDataTypes';
import QuantityControl from '../../cart/QuantityControl';

export default function PurchaseItem(option: ProductOptionType) {
  return (
    <div className="w-full padded py-5 bg-lightGray-2 rounded-sm">
      <p className="text-lightGray-1 text-sm">{option.productUuid}</p>
      <p>
        {option.colorOptionId} / {option.sizeOptionId}
      </p>
      <div className="flex flex-row justify-between pt-4">
        <QuantityControl
          quantity={1}
          onDecrease={() => {}}
          onIncrease={() => {}}
        />
        <p className="font-bold font-sd-gothic">
          {option.totalPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
