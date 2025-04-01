import { CartProductType, OrderProductType } from '@/types/ResponseDataTypes';
import React from 'react';

interface OrderItemSummaryProps {
  orderItems: OrderProductType[];
}

export default function OrderProductSummary({
  orderItems = [],
}: OrderItemSummaryProps) {
  const totalQuantity = orderItems.reduce(
    (sum, item) => sum + item.productQuantity,
    0
  );

  return (
    <span className="text-sm text-foreground font-medium font-pretendard">
      | 상품 {totalQuantity}개
    </span>
  );
}
