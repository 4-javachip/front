import {
  OrderListDataType,
  OrderListDetailDataType,
} from '@/types/OrderDataType';

import React from 'react';
import OrderDetailShippingInfo from './OrderDetailShippingInfo';
import OrderDetailItem from './OrderDetailItem';
import OrderInfo from './OrderInfo';
import OrderPaymentInfo from './OrderPaymentInfo';
import { checkIfReviewedByOrderDetailUuid } from '@/actions/review-service';

export default function OrderDetailList({
  orderListDetail,
  orderListData,
}: {
  orderListDetail: OrderListDetailDataType[];
  orderListData: OrderListDataType;
}) {
  return (
    <main className="py-[1.25rem]">
      <ul>
        <h1 className="text-xl font-bold mb-4 font-body space-y-2 px-6">
          주문 상세 내역
        </h1>
        <p className="py-3 px-6 ">주문 번호 {orderListData.orderCode}</p>
      </ul>
      <ul className="space-y-6  font-pretendard px-6 bg-white ">
        {orderListDetail.map((item) => (
          <OrderDetailItem key={item.orderDetailUuid} item={item} />
        ))}
      </ul>
      <OrderDetailShippingInfo orderListData={orderListData} />
      <OrderInfo orderListData={orderListData} />
      <OrderPaymentInfo item={orderListData} />
    </main>
  );
}
