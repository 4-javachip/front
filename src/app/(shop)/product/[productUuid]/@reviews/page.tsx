import {
  getReviewDatasByProductUuid,
  getReviewSummaryDataByProductUuid,
} from '@/actions/review-service';
import ReviewPreview from '@/components/pages/productDetail/Review/ReviewPreview';

export default async function page({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  const [reviewDatas, reviewSummary] = await Promise.all([
    getReviewDatasByProductUuid({
      productUuid,
      sortType: 'LATEST',
      pageSize: 5,
    }),
    getReviewSummaryDataByProductUuid(productUuid),
  ]);

  if (!reviewDatas.data || !reviewSummary.data) return null;

  return (
    <>
      {reviewDatas.data?.content && (
        <ReviewPreview
          reviewDatas={reviewDatas.data.content}
          reviewSummary={reviewSummary.data}
        />
      )}
    </>
  );
}
