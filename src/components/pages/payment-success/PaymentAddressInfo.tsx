import { RecentOrderItemDataType } from '@/types/OrderDataType';
import React from 'react';

export default function PaymentAddressInfo({
  orderListItem,
}: {
  orderListItem: RecentOrderItemDataType;
}) {
  return (
    <div>
      <p className="bg-background p-6 font-semibold text-3xl">
        {' '}
        주문이 완료되었습니다{' '}
      </p>
      <address className="not-italic bg-background px-6 py-6 mt-3">
        <h2 className="font-bold mb-2 text-lg ">배송 정보</h2>
        <div className="space-y-0.5 leading-relaxed">
          <p className="font-semibold">
            {orderListItem?.addressName} ({orderListItem?.recipientName})
          </p>
          <p className="text-sm text-gray-800">
            ({orderListItem?.zipCode}) {orderListItem?.baseAddress}
            {orderListItem?.detailAddress}
          </p>
          <p className="text-sm text-gray-800">
            {orderListItem?.phoneNumber} {orderListItem?.secondPhoneNumber}
          </p>
          <p>{orderListItem?.shippingNote}</p>
        </div>
      </address>
    </div>
  );
}
