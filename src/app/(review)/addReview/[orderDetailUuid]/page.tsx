import { getOrderDetailDataBtOrderDetailUuid } from '@/actions/order-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import AddReviewForm from '@/components/pages/orderlist/AddReview/AddReviewForm';

export default async function page({
  params,
}: {
  params: Promise<{ orderDetailUuid: string }>;
}) {
  const fallback = (
    <NotFoundLayout
      message="주문 상품을 찾을 수 없습니다."
      linkText="홈으로"
      linkHref="/"
    />
  );

  const orderDetailUuid = (await params).orderDetailUuid;
  const orderDetailData = await getOrderDetailDataBtOrderDetailUuid(
    orderDetailUuid
  );
  if (!orderDetailData.success) return fallback;

  const handleSubmit = async (AddReviewFormData: FormData) => {
    'use server';

    console.log(AddReviewFormData);
  };

  return (
    <>
      <AddReviewForm
        orderDetailData={orderDetailData.data}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
