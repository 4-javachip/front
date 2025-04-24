import { getUserInfoData } from '@/actions/auth';
import { getOrderDetailDataBtOrderDetailUuid } from '@/actions/order-service';
import {
  addReviewAction,
  addReviewImageAction,
  checkIfReviewedByOrderDetailUuid,
} from '@/actions/review-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import AddReviewForm from '@/components/pages/orderlist/AddReview/AddReviewForm';
import { OrderListDetailDataType } from '@/types/OrderDataType';
import { addReviewDataType } from '@/types/RequestDataTypes';

export default async function page({
  params,
}: {
  params: Promise<{ orderDetailUuid: string }>;
}) {
  const orderDetailUuid = (await params).orderDetailUuid;
  const orderDetailData = await getOrderDetailDataBtOrderDetailUuid(
    orderDetailUuid
  );
  if (!orderDetailData.success)
    return (
      <NotFoundLayout
        message="주문 상품을 찾을 수 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
    );

  const isReviewdCheck = await checkIfReviewedByOrderDetailUuid(
    orderDetailUuid
  );
  if (isReviewdCheck)
    return (
      <NotFoundLayout
        message="이미 작성한 리뷰입니다."
        linkText="홈으로"
        linkHref="/"
      />
    );

  const handleSubmit = async (
    AddReviewFormData: FormData,
    orderDetailData: OrderListDetailDataType
  ) => {
    'use server';
    const payload: addReviewDataType = {
      productUuid: orderDetailData.productUuid,
      orderDetailUuid: orderDetailData.orderDetailUuid,
      title: AddReviewFormData.get('title') as string,
      content: AddReviewFormData.get('content') as string,
      rating: Number(AddReviewFormData.get('rating')),
    };
    // console.log(payload);
    const res = await addReviewAction(payload);
    const reviewUuid = res.data.result;

    const imageFiles: File[] = [];
    AddReviewFormData.forEach((value, key) => {
      if (
        key &&
        key.startsWith('image-') &&
        value instanceof File &&
        value.size > 0
      ) {
        imageFiles.push(value);
      }
    });

    if (imageFiles.length < 0) return;

    const formData = new FormData();
    imageFiles.forEach((file, index) => {
      formData.append('image', file);
    });
    formData.append('reviewUuid', reviewUuid);

    const addImageRes = await addReviewImageAction(formData);
    // console.log(addImageRes);
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
