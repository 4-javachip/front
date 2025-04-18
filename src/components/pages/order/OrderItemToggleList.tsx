import React from 'react';
import OrderItem from './OrderItem';
import { OrderItemDataType } from '@/types/OrderDataType';

interface OrderItemToggleProps {
  orderItems: OrderItemDataType[];
  isOpen: boolean;
}

export default function OrderItemToggleList({
  orderItems,
  isOpen,
}: OrderItemToggleProps) {
  return (
    <section>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
      >
        {orderItems &&
          orderItems
            .map((item) => (
              <OrderItem
                key={item.productOptionUuid}
                orderItems={item}
                size={80}
              />
            ))
            .slice(0, isOpen ? orderItems.length : 1)}
      </div>
    </section>
  );
}
