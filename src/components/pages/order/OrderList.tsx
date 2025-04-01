'use client';

import { useState } from 'react';
import { CartProductType, OrderProductType } from '@/types/ResponseDataTypes';
import OrderItemToggleList from './OrderItemToggleList';
import OrderItemSummary from './OrderItemSummary';
import ToggleButton from '@/components/ui/buttons/ToggleButton';
import { CommonLayout } from '@/components/layouts/CommonLayout';

interface Props {
  orderItems: OrderProductType[];
}

export default function OrderList({ orderItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-pretendard font-semibold flex items-center gap-2">
          주문내역
          <OrderItemSummary orderItems={orderItems} />
        </h2>

        <ToggleButton
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
        />
      </div>

      <OrderItemToggleList orderItems={orderItems} isOpen={isOpen} />

      <CommonLayout.CommonBorder />
    </section>
  );
}
