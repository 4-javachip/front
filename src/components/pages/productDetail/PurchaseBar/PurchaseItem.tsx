import { SelectedOptionWithNames } from '@/types/storeDataTypes';
import QuantityControl from '../../cart/QuantityControl';
import CloseIcon from '@/components/ui/icons/CloseIcon';

export default function PurchaseItem({
  option,
  onRemove,
}: {
  option: SelectedOptionWithNames;
  onRemove: (productOptionUuid: string) => void;
}) {
  return (
    <div
      className="w-full padded py-5 bg-lightGray-2 rounded-sm
    relative"
    >
      <div
        className="absolute right-4 top-4 cursor-pointer"
        onClick={() => onRemove(option.productOptionUuid)}
      >
        <CloseIcon size={18} />
      </div>
      <p className="text-gray-1 text-sm">
        {option.colorName} / {option.sizeName}
      </p>
      <div className="flex flex-row justify-between pt-4">
        {/* <QuantityControl
          quantity={1}
          onDecrease={() => {}}
          onIncrease={() => {}}
        /> */}
        <p className="font-bold font-sd-gothic">34,000원</p>

        <p className="font-bold font-sd-gothic">
          {option.totalPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
