import { getReviewDatasByProductUuid } from '@/actions/review-service';
import ProductReviewSection from '@/components/pages/productDetail/Review/ProductReviewSection';
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
    page: 0,
    pageSize: PAGE_SIZE,
  };
  let reviewDatas;
  try {
    reviewDatas = await getReviewDatasByProductUuid(reviewParams);
  } catch {
    return null;
  }

  console.log(reviewDatas);
  return (
    <>
      <ProductReviewSection />
    </>
  );
}
