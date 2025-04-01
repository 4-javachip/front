import React from 'react';
import { OrderProductType } from '@/types/ResponseDataTypes';
import OrderItem from './OrderItem';

interface OrderItemToggleProps {
  orderItems: OrderProductType[];
  isOpen: boolean;
}

export default function OrderItemToggleList({
  orderItems: cartItems,
  isOpen,
}: OrderItemToggleProps) {
  if (!cartItems || cartItems.length === 0) return null;

  const [firstItem, ...restItems] = cartItems;

  return (
    <section>
      <OrderItem item={firstItem} isFirst isOpen={isOpen} />

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[31.25rem]' : 'max-h-0'
        }`}
      >
        {restItems.map((item) => (
          <OrderItem
            key={item.productOptionListUuid}
            item={item}
            isOpen={isOpen}
          />
        ))}
      </div>
    </section>
  );
}
