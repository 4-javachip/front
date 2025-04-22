import WishButton from '@/components/ui/buttons/WishButton';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import { ProductInfoDataType } from '@/types/ProductResponseDataTypes';

export default function ProductInfo({
  name,
  price,
  totalPrice,
  discountRate,
  best: isBest,
  new: isNew,
  productUuid,
}: ProductInfoDataType) {
  return (
    <section className="pt-6 font-pretendard padded">
      <div className="grid grid-flow-col gap-4">
        <h1 className="font-semibold text-[1.375rem] pb-4">
          <span className="pr-3">{name}</span>
          <span className="inline-flex">
            <ProductLabelIcon isBest={isBest} isNew={isNew} />
          </span>
        </h1>
        <div className="justify-self-end">
          <WishButton productUuid={productUuid} />
        </div>
      </div>

      <p className="font-medium text-sm text-lightGray-10 pb-5">{name}</p>

      {totalPrice && discountRate != 0 ? (
        <>
          <del className="font-light text-lg text-lightGray-6 font-sd-gothic">
            {price.toLocaleString()}원
          </del>
          <div className="flex flex-row font-bold text-2xl gap-2 font-sd-gothic">
            <p className="text-green">{discountRate}%</p>
            <p className="">{totalPrice.toLocaleString()}원</p>
          </div>
        </>
      ) : (
        <p className="font-bold text-xl font-sd-gothic">
          {price.toLocaleString()}원
        </p>
      )}
    </section>
  );
}
