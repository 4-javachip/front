import {
  ProductOptionType,
  SelectableOptionType,
} from '@/types/ProductResponseDataTypes';

export default function PurchaseOptionItem({
  option,
  sizeData,
  colorData,
}: {
  option: ProductOptionType;
  sizeData?: SelectableOptionType[];
  colorData?: SelectableOptionType[];
}) {
  return (
    <li
      key={option.productOptionUuid}
      className="flex justify-between items-center border rounded-xl px-4 py-3"
    >
      <p className="flex gap-4 items-center text-sm">
        {option.colorOptionId !== null && colorData && (
          <span>
            {colorData.find((c) => c.id === option.colorOptionId)?.name}
          </span>
        )}
        {option.sizeOptionId !== null && sizeData && (
          <span>
            {sizeData.find((s) => s.id === option.sizeOptionId)?.name}
          </span>
        )}
      </p>

      <div className="text-base font-semibold font-sd-gothic">
        {option.totalPrice.toLocaleString()}원
      </div>
    </li>
  );
}
