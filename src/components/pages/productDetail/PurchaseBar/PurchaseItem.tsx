import { SelectedOptionWithNames } from '@/types/storeDataTypes';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import PurchaseQuantityControl from './PurchaseQuantityControl';

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
      {(option.colorOptionId || option.sizeOptionId) && (
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => onRemove(option.productOptionUuid)}
        >
          <CloseIcon size={18} />
        </div>
      )}
      <p className="text-gray-1 text-sm">
        {option.colorName || option.sizeName
          ? `${option.colorName || ''} ${
              option.colorName && option.sizeName ? '/' : ''
            } ${option.sizeName || ''}`
          : productNameData.name}
      </p>
      <div className="flex flex-row justify-between pt-4">
        <div className="w-fit flex items-center justify-start">
          <PurchaseQuantityControl quantity={option.quantity} />
        </div>

        <p className="font-bold font-sd-gothic">
          {option.totalPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
