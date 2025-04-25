import React from 'react';
import PaymentPurchaseBar from './PaymentPurchasebar';
import { RecentOrderItemDataType } from '@/types/OrderDataType';

export default function PaymentInfo({
  orderListItem,
}: {
  orderListItem: RecentOrderItemDataType;
}) {
  return (
    <div>
      {' '}
      <section className="border-t pt-6 bg-background px-6 mt-3 pb-30">
        <p className="text-lg font-semibold mb-1">결제 금액</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">{orderListItem?.method}</p>
          <p className="text-xl font-bold mb-1">
            {orderListItem?.totalPurchasePrice.toLocaleString()}원
          </p>
        </div>
        <div className="flex justify-between items-center mb-1">
          <p>결제 상태 </p>
          <p>{orderListItem?.paymentStatus}</p>
        </div>
        <PaymentPurchaseBar />
      </section>
    </div>
  );
}
