import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import { OrderListDetailDataType } from '@/types/OrderDataType';
import Link from 'next/link';
import AddReviewButton from './AddReview/AddReviewButton';

export default function OrderDetailItem({
  item,
}: {
  item: OrderListDetailDataType;
}) {
  return (
    <>
      <div className="border p-4 rounded-lg flex gap-3 flex-col">
        <div className="flex flex-row gap-4">
          <Link
            href={`/product/${item.productUuid}`}
            className="rounded-sm cursor-pointer  "
            draggable="false"
          >
            <CommonResposiveNextImage
              ImageUrl={item.thumbnail}
              description={item.name}
              className="rounded max-w-[140px] max-h-[140px]"
            />
          </Link>
          <div>
            <p className="text-base">{item.name}</p>
            <p className="text-sm text-gray-600">수량: {item.quantity}개</p>
            <p className="text-sm text-gray-600">
              가격: {item.totalPrice?.toLocaleString()}원
            </p>
          </div>
        </div>
        <AddReviewButton orderDetailUuid={item.orderDetailUuid} />
      </div>
    </>
  );
}
