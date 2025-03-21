import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import { ProductlItemType } from '@/types/ResponseDataTypes';

export default function ProductCarouselItem({
  id,
  thumbnail,
  label,
  name,
  price,
  salePrice,
  discountRate,
}: ProductlItemType) {
  return (
    <div className="flex flex-col gap-3 w-[140px]">
      {/* 썸네일 */}
      <div
        className="w-[140px] h-[140px] bg-lightGray-4 rounded-sm"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <div className="flex flex-col gap-2">
        <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} />
        {/* 상품명 */}
        <p className="font-sd-gothic font-medium">{name}</p>
      </div>
      {/* 가격 */}
      <div className="relative">
        {salePrice && discountRate != 0 ? (
          <>
            <p className="font-sd-gothic text-lightGray-6 line-through">
              {price.toLocaleString()}원
            </p>
            <p className="font-sd-gothic font-bold">
              {salePrice.toLocaleString()}원
            </p>
            {/* 할인률 */}
            <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
              {discountRate}%
            </p>
          </>
        ) : (
          <>
            <p className="font-sd-gothic font-bold">
              {price.toLocaleString()}원
            </p>
          </>
        )}
      </div>
    </div>
  );
}
