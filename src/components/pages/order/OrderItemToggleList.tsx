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
    <section>
      <OrderItem item={firstItem} isFirst={true} isOpen={isOpen} />

      {/* 추가 상품들 */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[31.25rem]' : 'max-h-0'
        }`}
      >
        {restItems.map((item) => (
          <OrderItem key={item.cartUuid} item={item} isOpen={isOpen} />
        ))}
      </div>
    </section>
  );
}
