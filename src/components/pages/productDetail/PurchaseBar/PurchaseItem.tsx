import { SelectedOptionWithNames } from '@/types/storeDataTypes';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import MinusIcon from '@/components/ui/icons/MinusIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';

export default function PurchaseItem({
  option,
  onRemove,
  productNameData,
}: {
  option: SelectedOptionWithNames;
  onRemove: (productOptionUuid: string) => void;
  productNameData: ProductNameDataType;
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
        {option.colorName || option.sizeName
          ? `${option.colorName || ''} ${
              option.colorName && option.sizeName ? '/' : ''
            } ${option.sizeName || ''}`
          : productNameData.name}
      </p>
      <div className="flex flex-row justify-between pt-4">
        <div className="w-fit flex items-center justify-start">
          {/* 컴포넌트 분리 예정 */}
          <button
            type="button"
            // disabled={quantity <= 1}
            name="decrease"
            // onClick={() => handleQuantityChange('decrease')}
            className="flex justify-center items-center"
          >
            <MinusIcon />
          </button>
          <p className="font-body font-semibold w-10 text-center">
            {option.quantity}
          </p>

          <button
            type="button"
            name="increase"
            // onClick={() => handleQuantityChange('increase')}
            className="flex justify-center items-center"
          >
            <PlusIcon />
          </button>
        </div>

        <p className="font-bold font-sd-gothic">
          {option.totalPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
