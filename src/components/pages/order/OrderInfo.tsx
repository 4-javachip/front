'use client';

import { useState } from 'react';
import { CartProductType } from '@/types/ResponseDataTypes';
import OrderItemToggleList from './OrderItemToggleList';
import OrderItemSummary from './OrderItemSummary';
import ToggleButton from '@/components/ui/buttons/ToggleButton';
import { dummyCartItems } from '@/data/dummyDatas';
import { CommonLayout } from '@/components/layouts/CommonLayout';

interface Props {
  cartItems: CartProductType[];
}

export default function OrderInfo({ cartItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="w-full  text-left text-lg font-pretendard font-semibold text-foreground mb-4 ">
          주문내역
          <OrderItemSummary cartItems={dummyCartItems} />
        </h2>

        <ToggleButton
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
        />
      </div>

      <OrderItemToggleList cartItems={cartItems} isOpen={isOpen} />
      <CommonLayout.CommonBorder />
    </section>
  );
}
