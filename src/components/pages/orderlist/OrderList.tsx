import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';
import {
  OrderListDataType,
  OrderListDetailDataType,
} from '@/types/OrderDataType';
import Link from 'next/link';

interface OrderListProps {
  orderList: OrderListDataType;
  orderDetail: OrderListDetailDataType[];
}

export default function OrderList({
  orderListData,
}: {
  orderListData: OrderListProps[];
}) {
  return (
    <ul className="space-y-6">
      {orderListData.map(({ orderList, orderDetail }) => {
        const firstProduct = orderDetail[0];

        return (
          <li key={orderList.orderListUuid} className="relative pt-6">
            <p className="absolute top-0 left-0 text-sm font-pretendard font-semibold px-2">
              {new Date(orderList.createdAt).toLocaleDateString()}
            </p>

            <Link
              href={`/order-list/${orderList.orderListUuid}`}
              className="absolute top-0 right-0 text-sm text-green px-2"
            >
              주문 상세
            </Link>

            <div className="border p-4 rounded-lg flex gap-4 mt-1">
              <CommonResposiveNextImage
                ImageUrl={firstProduct?.thumbnail || '/images/no-image.png'}
                description={firstProduct?.name || '상품 이미지'}
                className="rounded max-w-[100px] max-h-[100px]"
              />
              <div>
                <h3 className=" text-sm leading-8">
                  주문 번호 {orderList.orderCode}
                </h3>
                <p className="text-base font-semibold font-pretendard">
                  {orderList.orderName}
                </p>
                <ul className="flex gap-2 items-center">
                  <li className="font-semibold font-pretendard text-sm">
                    {orderList.totalPurchasePrice.toLocaleString()}원
                  </li>
                  <li className="text-sm text-gray-600 font-pretendard">
                    {orderDetail.length}개
                  </li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
