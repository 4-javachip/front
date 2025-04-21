import { getProductNameDataByProductUuid } from '@/actions/product-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import ProductReviewSection from '@/components/pages/productDetail/Review/ProductReviewSection';
import SmallDropDownModal from '@/components/ui/dropdown/SmallDropDownModal';
import { PAGE_SIZE } from '@/constants/constants';

export default async function page({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  let product;
  try {
    product = await getProductNameDataByProductUuid(productUuid);
  } catch {
    return (
      <NotFoundLayout
        message="상품 리뷰를 찾을 수 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
    );
  }

  const reviewParams = {
    productUuid,
    sortType: 'LATEST',
    pageSize: PAGE_SIZE,
  };
  return (
    <>
      <section className="padded pt-8 flex justify-between items-center">
        <h1 className="font-bold">전체 리뷰</h1>
        <SmallDropDownModal />
      </section>
      <div className="padded pb-4">
        <hr className="my-3" />
      </div>
      <ProductReviewSection reviewParams={reviewParams} />
    </>
  );
}
