import { OrderListDataType } from '@/types/OrderDataType';
import React from 'react';

export default function OrderDetailShippingInfo({
  orderListData,
}: {
  orderListData: OrderListDataType;
}) {
  return (
    <section className="w-full px-6 text-sm p-3 font-body ">
      <address className="not-italic text-foreground leading-snug ">
        <p className="text-lg font-semibold pb-4">배송 정보</p>
        <ul className="flex items-center textg-body  gap-2">
          <li>
            <strong className="text-basefont-semibold text-lightGray-12 leading-7">
              {orderListData.addressName} ({orderListData.recipientName})
            </strong>
          </li>
        </ul>
        <ul className="font-medium leading-snug">
          <li>
            ({orderListData.zipCode}) {orderListData.baseAddress}
          </li>
          <li>{orderListData.detailAddress}</li>
        </ul>
        <ul className="flex items-center gap-2 font-pretendard text-xs leading-7">
          <li>{orderListData.phoneNumber}</li>
          <li className="border-l-2 pl-2 leading-3">
            {orderListData.secondPhoneNumber}
          </li>
          <li>{orderListData.shippingNote}</li>
        </ul>
      </address>
    </section>
  );
}
