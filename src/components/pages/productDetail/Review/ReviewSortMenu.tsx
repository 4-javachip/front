import SmallDropDownModal from '@/components/ui/dropdown/SmallDropDownModal';
import { reviewSortOptions } from '@/data/initialDatas';

export default function ReviewSortMenu() {
  return (
    <>
      <section className="padded pt-8 flex justify-between items-center">
        <h1 className="font-bold">전체 리뷰</h1>
        <SmallDropDownModal sortOptions={reviewSortOptions} />
      </section>
      <div className="padded pb-4">
        <hr className="my-3" />
      </div>
    </>
  );
}
