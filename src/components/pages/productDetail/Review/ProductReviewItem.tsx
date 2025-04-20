import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import {
  ProductReviewImageType,
  ProductReviewType,
} from '@/types/ProductResponseDataTypes';
import React from 'react';

export default function ProductReviewItem({
  reviewData,
  reviewImage,
}: {
  reviewData: ProductReviewType;
  reviewImage?: ProductReviewImageType;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 pb-4">
        <div className="flex gap-0.5 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={
                i < reviewData.rating ? 'text-yellow-400' : 'text-gray-300'
              }
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-sm font-sd-gothic">
          {'*'.repeat(2) + reviewData.userUuid.slice(6)}
        </span>
      </div>
      {reviewImage && (
        <div className="flex gap-2 pb-3">
          <CommonResposiveNextImage
            key={reviewImage.reviewUuid}
            ImageUrl={reviewImage.imageUrl}
            description={`리뷰 이미지 ${reviewImage.reviewUuid}`}
            className="rounded-md max-w-[110px]"
          />
        </div>
      )}
      <h3 className="font-semibold pb-1">{reviewData.title}</h3>
      <p className="text-sm text-gray-700">{reviewData.content}</p>
    </div>
  );
}
