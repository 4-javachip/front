import SmallDropDownModal from '@/components/ui/dropdown/SmallDropDownModal';
import { reviewSortOptions } from '@/data/initialDatas';
import { ProductReviewSummaryType } from '@/types/ProductResponseDataTypes';
import ReviewRating from './ReviewRating';

export default function ReviewSortMenu({
  reviewSummary,
}: {
  reviewSummary: ProductReviewSummaryType;
}) {
  return (
    <section className="padded pt-8">
      <h1 className="font-bold pb-8">전체 리뷰</h1>
      <div className="flex justify-between items-center">
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
        <SmallDropDownModal sortOptions={reviewSortOptions} />
      </div>
      <div className="padded pb-4">
        <hr className="my-3" />
      </div>
    </section>
  );
}
