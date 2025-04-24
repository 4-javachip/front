import { getOrderDetailDataBtOrderDetailUuid } from '@/actions/order-service';
import { addReviewAction } from '@/actions/review-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import AddReviewForm from '@/components/pages/orderlist/AddReview/AddReviewForm';
import { addReviewDataType } from '@/types/RequestDataTypes';

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

    const filteredFormData = new FormData();

    for (const [key, value] of AddReviewFormData.entries()) {
      if (value instanceof File && value.size === 0) continue;
      filteredFormData.append(key, value);
    }

    const payload: addReviewDataType = {
      productUuid: orderDetailData.data.productUuid,
      orderDetailUuid,
      title: AddReviewFormData.get('title') as string,
      content: AddReviewFormData.get('content') as string,
      rating: Number(AddReviewFormData.get('rating')),
    };
    console.log(payload);

    const res = await addReviewAction(payload);

    // console.log(filteredFormData);
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
