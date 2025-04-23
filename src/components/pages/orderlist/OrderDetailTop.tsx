import { OrderListDataType } from '@/types/OrderDataType';
import React from 'react';

export default function OrderDetailTop({
  orderListData,
}: {
  orderListData: OrderListDataType;
}) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 font-body space-y-4 ">
        주문 상세 내역
      </h1>
      <p className="py-3">주문 번호 {orderListData.orderCode}</p>
    </div>
  );
}
