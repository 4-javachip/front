import { RecentOrderItemDataType } from '@/types/OrderDataType';
import Image from 'next/image';
import React from 'react';

export default function PaymentProductInfo({
  orderListItem,
}: {
  orderListItem: RecentOrderItemDataType;
}) {
  return (
    <div>
      <section className="mt-3 py-6 px-6 bg-background">
        <div className="flex  col-end-2 items-center mb-4">
          <h2 className="font-bold text-lg">주문내역</h2>
          <p className="text-sm text-gray-600 border-l pl-2 leading-4">
            상품 {orderListItem?.orderItems.length ?? 0}개
          </p>
        </div>

        {orderListItem?.orderItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={100}
              height={100}
              className="rounded"
            />
            <div>
              <p className="font-medium text-sm mb-1">{item.name}</p>
              <p className="text-sm text-gray-600">{item.qauntity}개</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
