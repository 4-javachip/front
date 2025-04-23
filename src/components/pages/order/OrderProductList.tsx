'use client';

import { useState } from 'react';
import OrderItemSummary from './OrderItemSummary';
import ToggleButton from '@/components/ui/buttons/ToggleButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import {
  EnrichedOrderItemDataType,
  OrderItemPayload,
} from '@/types/OrderDataType';
import OrderPriceSummary from './OrderPriceSummary';

import OrderPurchaseBar from './OrderPurchaseBar';
import OrderItem from './OrderItem';

interface Props {
  orderItems: EnrichedOrderItemDataType[];
  shippingAddressUuid: string;
}

export default function OrderList({ orderItems, shippingAddressUuid }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const totalOriginPrice = orderItems.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const totalPurchasePrice = orderItems.reduce(
    (sum, item) => sum + item.productSalePrice * item.quantity,
    0
  );
  const orderName = orderItems[0]?.orderName || '주문상품';

  const paymentData = {
    orderName,
    totalOriginPrice,
    totalPurchasePrice,
    method: '',
    orderListUuid: '',
  };

  const paymentOrderItems = orderItems.map((item) => ({
    productUuid: item.productUuid,
    productOptionUuid: item.optionUuid,
    quantity: item.quantity,
    price: item.productPrice,
    totalPrice: item.productSalePrice,
  }));

  const paymentSuccessData: OrderItemPayload = {
    fromCart: true,
    orderItems: paymentOrderItems,
    totalOriginPrice,
    totalPurchasePrice,
    shippingAddressUuid,
  };

  return (
    <section>
      <CommonLayout.SectionInnerPadding>
        <div className="flex justify-between items-center">
          <h2 className=" font-semibold font-pretendard text-lg flex items-center gap-2">
            주문상품
            <OrderItemSummary orderItems={orderItems} />
          </h2>

          <ToggleButton
            isOpen={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
          />
        </div>

        <div className="transition-all duration-300 ease-in-out overflow-hidden">
          {orderItems.slice(0, isOpen ? orderItems.length : 1).map((item) => (
            <OrderItem key={item.optionUuid} orderItems={item} size={140} />
          ))}
        </div>
      </CommonLayout.SectionInnerPadding>
      <CommonLayout.CommonBorder />

      <OrderPriceSummary
        totalOriginPrice={totalOriginPrice}
        totalPrice={totalPurchasePrice}
      />
      <OrderPurchaseBar
        orderItems={paymentSuccessData}
        paymentData={paymentData}
      />
    </section>
  );
}
