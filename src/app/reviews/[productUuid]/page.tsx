import { getReviewSummaryDataByProductUuid } from '@/actions/review-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import ProductReviewSection from '@/components/pages/productDetail/Review/ProductReviewSection';
import ReviewSortMenu from '@/components/pages/productDetail/Review/ReviewSortMenu';
import { PAGE_SIZE } from '@/constants/constants';

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ productUuid: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const fallback = (
    <NotFoundLayout
      message="상품 리뷰를 찾을 수 없습니다."
      linkText="홈으로"
      linkHref="/"
    />
  );

  const productUuid = (await params).productUuid;
  if (!productUuid) return fallback;

  const reviewSummary = await getReviewSummaryDataByProductUuid(productUuid);
  if (reviewSummary.data === undefined) return fallback;

  const searchParam = await searchParams;

  const reviewParams = {
    productUuid,
    sortType: searchParam.sortType
      ? (searchParam.sortType.toUpperCase() as
          | 'LATEST'
          | 'RATING_ASC'
          | 'RATING_DESC')
      : undefined,
    pageSize: PAGE_SIZE,
  };

  return (
    <>
      <ReviewSortMenu reviewSummary={reviewSummary.data} />
      <ProductReviewSection reviewParams={reviewParams} />
    </>
  );
}
