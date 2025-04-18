'use client';
import { useState } from 'react';
import OrderItemToggleList from './OrderItemToggleList';
import OrderItemSummary from './OrderItemSummary';
import ToggleButton from '@/components/ui/buttons/ToggleButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { OrderItemDataType } from '@/types/OrderDataType';
import OrderPriceSummary from './OrderPriceSummary';
import { CartItemPriceData } from '@/types/CartDataType';

interface Props {
  orderItems: OrderItemDataType[];
  orderPirce: CartItemPriceData[];
}

export default function OrderList({ orderItems, orderPirce }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  console.log('orderItems', orderItems);
  console.log('orderPirce', orderPirce);
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

        <OrderItemToggleList orderItems={orderItems} isOpen={isOpen} />
      </CommonLayout.SectionInnerPadding>
      <CommonLayout.CommonBorder />

      <OrderPriceSummary orderItems={orderPirce} />
    </section>
  );
}
