'use client';

import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import useCategoryCarousel from '@/hooks/useCarousel';
import { ProductReviewImageType } from '@/types/ProductResponseDataTypes';

export default function ReviewImageCarousel({
  reviewImages,
}: {
  reviewImages: ProductReviewImageType[];
}) {
  const { containerRef, onMouseDown, onMouseMove, onMouseUpOrLeave } =
    useCategoryCarousel();

  return (
    <>
      {reviewImages.length > 0 && (
        <section className="flex flex-col container gap-8 pt-2 pb-3">
          <ul
            ref={containerRef}
            className="flex flex-row gap-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
          >
            {reviewImages.map((img, index) => (
              <CommonResposiveNextImage
                key={`${img.reviewUuid}-${index}`}
                ImageUrl={img.imageUrl}
                description={`리뷰 이미지 ${img.reviewUuid}-${index}`}
                className="rounded-md max-w-[150px]"
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
