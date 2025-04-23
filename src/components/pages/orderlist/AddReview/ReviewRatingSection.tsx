import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import ReviewRatingInput from './ReviewRatingInput';
import { Dispatch, SetStateAction } from 'react';
import { OrderListDetailDataType } from '@/types/OrderDataType';

export default function ReviewRatingSection({
  orderDetailData,
  rating,
  setRating,
}: {
  orderDetailData: OrderListDetailDataType;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}) {
  return (
    <section className="flex flex-row gap-4">
      <CommonResposiveNextImage
        ImageUrl={orderDetailData.thumbnail}
        description={orderDetailData.name}
        className="max-w-[110px] max-h-[110px] rounded-sm"
      />
      <div className="flex flex-col">
        <p className="text-sm text-gray-1 pb-1">{orderDetailData.name}</p>
        <div className="flex gap-1 text-sm text-lightGray-1 pb-3">
          {orderDetailData.colorName && (
            <span>{orderDetailData.colorName} /</span>
          )}
          {orderDetailData.sizeName && <span>{orderDetailData.sizeName}</span>}
        </div>
        <div className="space-y-1">
          <ReviewRatingInput rating={rating} setRating={setRating} size={25} />
          {rating === 0 && (
            <p className="text-[13px] text-lightGray-8">
              평점을 선택해 주세요.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
