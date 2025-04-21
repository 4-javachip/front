'use client';

import { useEffect, useState } from 'react';
import OrderItemSummary from './OrderItemSummary';
import ToggleButton from '@/components/ui/buttons/ToggleButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { EnrichedOrderItemDataType } from '@/types/OrderDataType';
import OrderPriceSummary from './OrderPriceSummary';

import OrderPurchaseBar from './OrderPurchaseBar';
import { useOrderItemContext } from '@/context/OrderItemContext';

import { usePaymentSuccessContext } from '@/context/PaymentSuccessContext';
import OrderItem from './OrderItem';

interface Props {
  orderItems: EnrichedOrderItemDataType[];
  shippingAddressUuid: string;
}

export default function OrderList({ orderItems, shippingAddressUuid }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPaymentData } = useOrderItemContext();
  const { setPaymentSuccessData } = usePaymentSuccessContext();

  const totalOriginPrice = orderItems.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const totalPurchasePrice = orderItems.reduce(
    (sum, item) => sum + item.productSalePrice * item.quantity,
    0
  );

  useEffect(() => {
    if (!orderItems.length) return;

    const name =
      orderItems.length > 1
        ? `${orderItems[0].productName} 외 ${orderItems.length - 1}건`
        : orderItems[0].productName;

    setPaymentData({
      orderName: name,
      totalOriginPrice,
      totalPurchasePrice,
      method: '',
    });
    const paymentOrderItems = orderItems.map((item) => ({
      productUuid: item.productUuid,
      productOptionUuid: item.optionUuid,
      quantity: item.quantity,
      price: item.productPrice,
      totalPrice: item.productSalePrice,
    }));

    setPaymentSuccessData({
      fromCart: true,
      orderItems: paymentOrderItems,
      totalOriginPrice,
      totalPurchasePrice,
      shippingAddressUuid,
      paymentUuid: '',
    });
  }, [orderItems, shippingAddressUuid]);
  const { paymentSuccessData } = usePaymentSuccessContext();

  useEffect(() => {
    console.log('🧾 paymentSuccessData:', paymentSuccessData);
  }, [paymentSuccessData]);
  console.log('paymentSuccessData', paymentSuccessData);
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
            <OrderItem key={item.optionUuid} orderItems={item} size={80} />
          ))}
        </div>
      </CommonLayout.SectionInnerPadding>
      <CommonLayout.CommonBorder />

      <OrderPriceSummary
        totalOriginPrice={totalOriginPrice}
        totalPrice={totalPurchasePrice}
      />
      <OrderPurchaseBar />
    </section>
  );
}
