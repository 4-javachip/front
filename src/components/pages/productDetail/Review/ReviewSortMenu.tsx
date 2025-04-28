import SmallDropDownModal from '@/components/ui/dropdown/SmallDropDownModal';
import { reviewSortOptions } from '@/data/initialDatas';
import { ProductReviewSummaryType } from '@/types/ProductResponseDataTypes';
import ReviewAverageRating from './ReviewAverageRating';

export default function ReviewSortMenu({
  reviewSummary,
}: {
  reviewSummary: ProductReviewSummaryType;
}) {
  return (
    <section className="padded pt-8">
      <h1 className="font-bold pb-8">전체 리뷰</h1>
      <div className="flex justify-between items-center">
        <ReviewAverageRating reviewSummary={reviewSummary} />
        <SmallDropDownModal sortOptions={reviewSortOptions} />
      </div>
      <div className="pb-4">
        <hr className="my-3" />
      </div>
    </section>
  );
}
