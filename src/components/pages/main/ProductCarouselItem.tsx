import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';

interface ProductlItemType {
  isOnSale: boolean;
}

export default function ProductCarouselItem({ isOnSale }: ProductlItemType) {
  return (
    <div className="flex flex-col gap-3 w-[140px]">
      {/* 썸네일 */}
      <div className="w-[140px] h-[140px] bg-lightGray-4 rounded-sm"></div>
      <div className="flex flex-col gap-2">
        <ProductLabelIcon isBest={true} isNew={true} />
        {/* 상품명 */}
        <p className="font-sd-gothic font-medium">SS 핑크 탱크 텀블러 503ml</p>
      </div>
      {/* 가격 */}
      <div className="relative">
        {isOnSale ? (
          <>
            <p className="font-sd-gothic text-lightGray-6 line-through">
              35,000원
            </p>
            <p className="font-sd-gothic font-bold">31,500원</p>
            {/* 할인률 */}
            <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
              5%
            </p>
          </>
        ) : (
          <>
            <p className="font-sd-gothic font-bold">31,500원</p>
          </>
        )}
      </div>
    </div>
  );
}
