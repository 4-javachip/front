import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import AddReviewForm from '@/components/pages/orderlist/AddReview/AddReviewForm';
import { OrderListDetailDataType } from '@/types/OrderDataType';

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
  if (!orderDetailUuid) return fallback;

  const dummyOrderDetailData: OrderListDetailDataType = {
    orderListUuid: 'orderlist-1234',
    orderDetailUuid: 'orderdetail-5678',
    productUuid: 'product-9999',
    name: '기본 반팔 티셔츠',
    thumbnail: 'https://dummyimage.com/500',
    price: 30000,
    discountRate: 10,
    totalPrice: 27000,
    quantity: 2,
    sizeName: 'L',
    colorName: '블랙',
  };

  return (
    <>
      <AddReviewForm orderDetailData={dummyOrderDetailData} />
    </>
  );
}
