import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ShareIcon from '@/components/ui/icons/ShareIcon';
import Image from 'next/image';

export default function ProductInfoSection({
  salePrice = 40000,
  discountRate = 5,
}: {
  salePrice?: number;
  discountRate?: number;
}) {
  return (
    <div className="pt-6 font-pretendard">
      <div className="grid grid-flow-col gap-[17px]">
        <div className="font-semibold text-[22px] pb-4">
          <span>SS 플라워 마켓 스탠리 켄처 텀블러 591ml</span>
          <span className="inline-flex pl-3">
            <ProductLabelIcon isBest={true} isNew={true} />
          </span>
        </div>
        <div className="justify-self-end">
          <ShareIcon />
        </div>
      </div>

      <p className="font-medium text-[12px] text-[#8c8c8c] pb-5">
        부드러운 꽃향기의 색을 닮은 플라워 마켓 스탠리 켄처 텀블러입니다.
      </p>
      {/* 가격 */}
      {salePrice && discountRate != 0 ? (
        <div>
          <p className="font-light text-lightGray-6 line-through">43,000원</p>
          <div className="flex flex-row font-bold text-xl gap-2">
            <p className="text-green">20%</p>
            <p className="">{salePrice.toLocaleString()}원</p>
          </div>
        </div>
      ) : (
        <p className="font-bold text-xl">43,000원</p>
      )}
    </div>
  );
}
