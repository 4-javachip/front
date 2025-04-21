'use client';

import React, { useState } from 'react';
import ProductReviewItem from './ProductReviewItem';
import { getReviewDataType } from '@/types/RequestDataTypes';
import { getReviewDatasByProductUuid } from '@/actions/review-service';
import { CommonLoader } from '@/components/ui/loaders/CommonLoader';
import useInfiniteReviewList from '@/hooks/useInfiniteReviewList';
import { PAGE_SIZE } from '@/constants/constants';

export default function ProductReviewSection({
  reviewParams,
}: {
  reviewParams: getReviewDataType;
}) {
  const {
    loaderRef,
    items: reviews,
    isLoading,
    isParamsLoading,
    hasMore,
  } = useInfiniteReviewList({
    fetchPageData: async (page, p) => {
      const res = await getReviewDatasByProductUuid({
        productUuid: p?.productUuid,
        sortType: p?.sortType,
        page,
        pageSize: PAGE_SIZE,
      });
      if (!res.success)
        return {
          content: [],
          hasNext: false,
        };

      console.log(hasMore, page, reviews);
      return { content: res.data!.content, hasNext: false };
    },
    params: reviewParams,
  });

  return (
    <section className="padded pb-8" id="product-review">
      {isParamsLoading ? (
        <CommonLoader />
      ) : reviews.length === 0 ? (
        <div className="h-50 pt-4 w-full flex justify-center items-center">
          <p className="text-lightGray-6 text-sm">등록된 리뷰가 없습니다.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-5">
            {reviews.map((review, index) => (
              <li key={review.reviewUuid}>
                <ProductReviewItem reviewData={review} />
                {index < reviews.length - 1 && <hr className="mt-5" />}
              </li>
            ))}
          </ul>
          {!isLoading && hasMore && <div ref={loaderRef} className="h-20" />}
          {isLoading && <CommonLoader className="h-10" />}
        </>
      )}
    </section>
  );
}
