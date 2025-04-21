import { getUserNicknameByUserUuid } from '@/actions/auth';
import { getReviewImageDataByReviewUuid } from '@/actions/review-service';
import {
  ProductReviewImageType,
  ProductReviewType,
} from '@/types/ProductResponseDataTypes';
import React, { useEffect, useState } from 'react';
import ReviewRating from './ReviewRating';
import ReviewImageCarousel from './ReviewImageCarousel';
import ReviewItemSkeleton, {
  ReviewNameSkeleton,
} from '@/components/ui/skeletons/ReviewItemSkeleton';

export default function ProductReviewItem({
  reviewData,
}: {
  reviewData: ProductReviewType;
}) {
  const [reviewImages, setReviewImages] = useState<ProductReviewImageType[]>();
  const [userName, setUserName] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviewImage = async () => {
      const res = await getReviewImageDataByReviewUuid({
        reviewUuid: reviewData.reviewUuid,
      });
      setReviewImages(res.data);
      const userNameRes = await getUserNicknameByUserUuid({
        userUuid: reviewData.userUuid,
      });
      if (userNameRes.data) setUserName(userNameRes.data.nickname);
      setIsLoading(false);
    };

    fetchReviewImage();
  }, []);

  if (isLoading) return <ReviewItemSkeleton />;

  return (
    <div>
      <div className="flex items-center gap-2 pb-4">
        <ReviewRating rating={reviewData.rating} />
        {userName && (
          <span className="text-sm font-sd-gothic">
            {'*'.repeat(2) + userName.slice(2)}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-sm pb-1">{reviewData.title}</h3>
      {reviewImages ? (
        <ReviewImageCarousel reviewImages={reviewImages} />
      ) : (
        <ReviewItemSkeleton />
      )}
      <p className="text-sm text-gray-700">{reviewData.content}</p>
    </div>
  );
}
