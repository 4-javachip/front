import { OrderListDataType } from '@/types/OrderDataType';
import React from 'react';

export default function OrderInfo({
  orderListData,
}: {
  orderListData: OrderListDataType;
}) {
  const date = new Date(orderListData.createdAt);

  const formattedDate = date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return (
    <section className="font-body text-sm border-t-10 border-lightGray-2 px-6">
      <p className="text-lg font-semibold py-4">주문 정보</p>
      <div>
        <ul className="flex justify-between pb-5 border-b">
          <li>주문 일시</li> <li> {formattedDate}</li>
        </ul>
        <ul className="flex justify-between py-5 ">
          <li>주문 번호 </li>
          <li>{orderListData.orderCode}</li>
        </ul>
      </div>
    </section>
  );
}
