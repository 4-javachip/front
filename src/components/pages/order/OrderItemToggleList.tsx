import React from 'react';
import { CartProductType } from '@/types/ResponseDataTypes';
import OrderItem from './OrderItem';

interface Props {
  cartItems: CartProductType[];
  isOpen: boolean;
}

export default function OrderItemToggleList({ cartItems, isOpen }: Props) {
  const firstItem = cartItems[0];
  const restItems = cartItems.slice(1);

  return (
    <section className="pt-4">
      <OrderItem item={firstItem} isFirst={true} />

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] mt-3' : 'max-h-0'
        }`}
      >
        {restItems.map((item) => (
          <OrderItem key={item.cartUuid} item={item} />
        ))}
      </div>
    </section>
  );
}
