'use client';

import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import { OrderListDetailDataType } from '@/types/OrderDataType';
import { useState } from 'react';
import ReviewRatingInput from './ReviewRatingInput';
import InputWithLabel from '@/components/ui/inputs/InputWithLabel';
import TextareaWithLabel from '@/components/ui/inputs/TextAreaWithLabel';
import ImageInputWithLabel from '@/components/ui/inputs/ImageInputWithLabel';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

export default function AddReviewForm({
  orderDetailData,
}: {
  orderDetailData: OrderListDetailDataType;
}) {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="p-6 mb-[86px]">
        <div className="flex flex-row gap-4">
          <CommonResposiveNextImage
            ImageUrl={orderDetailData.thumbnail}
            description={orderDetailData.name}
            className="max-w-3/10 max-h-3/10 rounded-sm"
          />
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-1">{orderDetailData.name}</p>
            <div className="space-y-1">
              <ReviewRatingInput
                rating={rating}
                setRating={setRating}
                size={25}
              />
              {rating === 0 && (
                <p className="text-[13px] text-lightGray-8">
                  평점을 선택해 주세요.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-4">
          <InputWithLabel
            label="제목"
            id="title"
            placeholder="리뷰 제목을 작성해 주세요."
          />
          <TextareaWithLabel
            label="내용"
            id="content"
            placeholder="구매하신 제품의 후기를 남겨 주세요. (최대 200자)"
            className="h-[200px]"
          />
          <ImageInputWithLabel label="이미지(선택)" id="image" />
        </div>
      </div>
      <ConfirmNextButton onClick={() => {}}>작성 완료</ConfirmNextButton>
    </>
  );
}
