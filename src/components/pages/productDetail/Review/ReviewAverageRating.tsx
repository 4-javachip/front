import { ProductReviewSummaryType } from '@/types/ProductResponseDataTypes';
import ReviewRating from './ReviewRating';

export default function ReviewAverageRating({
  reviewSummary,
}: {
  reviewSummary: ProductReviewSummaryType;
}) {
  return (
    <div className="flex flex-row items-center">
      <ReviewRating
        rating={reviewSummary.averageRating}
        size={22}
        color="text-green"
      />
      <span className="font-bold ms-2">{reviewSummary.averageRating}</span>
      <span className="text-xs text-lightGray-1 ms-0.5">
        ({reviewSummary.totalReviews})
      </span>
    </div>
  );
}
