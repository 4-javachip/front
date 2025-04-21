'use client';

import ProductReviewItem from './ProductReviewItem';
import {
  ProductReviewImageType,
  ProductReviewType,
} from '@/types/ProductResponseDataTypes';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { useRouter } from 'next/navigation';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';

export default function ReviewPreview({
  reviewDatas,
}: {
  reviewDatas: ProductReviewType[];
  reviewImageData?: ProductReviewImageType;
}) {
  const router = useRouter();

  return (
    <section className="padded" id="product-review">
      <h1 className="font-bold text-lg pb-10">고객리뷰</h1>
      <ul className="space-y-5">
        {reviewDatas.length === 0 ? (
          <div className="h-50 pt-4 w-full flex justify-center items-center">
            <p className="text-lightGray-6 text-sm">등록된 리뷰가 없습니다.</p>
          </div>
        ) : (
          <>
            {reviewDatas.map((review, index) => (
              <li key={review.reviewUuid}>
                <ProductReviewItem reviewData={review} />
                {index < reviewDatas.length - 1 && <hr className="mt-5" />}
              </li>
            ))}

            <CommonButton
              isEnabled={true}
              className="bg-background text-gray-1 shadow-[0rem_0.125rem_0.5rem_rgba(0,0,0,0.12)]
          mt-3 mb-6"
              onClick={() =>
                router.push(`/reviews/${reviewDatas[0].productUuid}`)
              }
            >
              <span className="inline-flex items-center">
                리뷰 전체보기
                <span className="inline-flex items-center ml-1.5">
                  <RightArrowIcon size={16} className="mt-0.5" />
                </span>
              </span>
            </CommonButton>
          </>
        )}
      </ul>
    </section>
  );
}
