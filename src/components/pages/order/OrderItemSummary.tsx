import { CartProductType } from '@/types/ResponseDataTypes';
import React from 'react';

interface OrderItemSummaryProps {
  cartItems: CartProductType[];
}

export default function OrderProductSummary({
  cartItems = [],
}: OrderItemSummaryProps) {
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.productQuantity,
    0
  );

  return (
    <span className="text-sm text-foreground font-medium font-pretendard">
      | 상품 {totalQuantity}개
    </span>
  );
}
