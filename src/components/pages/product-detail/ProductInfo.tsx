import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ShareIcon from '@/components/ui/icons/ShareIcon';
import { ProductDetailType } from '@/types/ResponseDataTypes';

export default function ProductInfo({
  id,
  image,
  label,
  name,
  description,
  price,
  salePrice,
  discountRate,
  detailDescription,
}: ProductDetailType) {
  return (
    <div className="pt-6 font-pretendard">
      <div className="grid grid-flow-col gap-[17px]">
        <div className="font-semibold text-[22px] pb-4">
          <span>{name}</span>
          <span className="inline-flex pl-3">
            <ProductLabelIcon isBest={true} isNew={true} />
          </span>
        </div>
        <div className="justify-self-end">
          <ShareIcon />
        </div>
      </div>

      <p className="font-medium text-[12px] text-[#8c8c8c] pb-5">
        {description}
      </p>
      {/* 가격 */}
      {salePrice && discountRate != 0 ? (
        <div>
          <p className="font-light text-lightGray-6 line-through">
            {price.toLocaleString()}원
          </p>
          <div className="flex flex-row font-bold text-xl gap-2">
            <p className="text-green">{discountRate}%</p>
            <p className="">{salePrice.toLocaleString()}원</p>
          </div>
        </div>
      ) : (
        <p className="font-bold text-xl">{price.toLocaleString()}원</p>
      )}
    </div>
  );
}
