import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import {
  ProductReviewImageType,
  ProductReviewType,
} from '@/types/ProductResponseDataTypes';
import Image from 'next/image';
import React from 'react';

export default function ProductReviewItem({
  reviewData,
  reviewImage,
}: {
  reviewData: ProductReviewType;
  reviewImage?: ProductReviewImageType;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-base">
          {reviewData.productUuid}
        </span>
        <div className="flex gap-0.5">
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
      </div>

      {reviewImage && (
        <div className="flex gap-2">
          <CommonResposiveNextImage
            key={reviewImage.reviewUuid}
            ImageUrl={reviewImage.imageUrl}
            description={`리뷰 이미지 ${reviewImage.reviewUuid}`}
            className="rounded-md max-w-[120px]"
          />
        </div>
      )}

      <h3 className="font-semibold text-lg">{reviewData.title}</h3>
      <p className="text-sm text-gray-700">{reviewData.content}</p>
    </section>
  );
}
