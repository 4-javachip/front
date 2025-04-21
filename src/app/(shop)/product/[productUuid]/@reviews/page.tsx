import { getReviewDatasByProductUuid } from '@/actions/review-service';
import ProductReviewSection from '@/components/pages/productDetail/Review/ProductReviewSection';
import ReviewPreview from '@/components/pages/productDetail/Review/ReviewPreview';
import { PAGE_SIZE } from '@/constants/constants';

export default async function page({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  const reviewParams = {
    productUuid,
    sortType: 'LATEST',
    pageSize: 5,
  };
  let reviewDatas;
  try {
    reviewDatas = await getReviewDatasByProductUuid(reviewParams);
  } catch {
    return null;
  }

  return (
    <>
      {reviewDatas.data?.content && (
        <ReviewPreview reviewDatas={reviewDatas.data.content} />
      )}
    </>
  );
}
