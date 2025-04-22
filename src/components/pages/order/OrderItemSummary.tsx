import { EnrichedOrderItemDataType } from '@/types/OrderDataType';
import React from 'react';

interface OrderItemSummaryProps {
  orderItems: EnrichedOrderItemDataType[];
}

export default function OrderProductSummary({
  orderItems = [],
}: OrderItemSummaryProps) {
  const totalQuantity = orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  console.log('totalQuantity', totalQuantity);

  return (
    <span className="text-sm text-foreground font-medium font-pretendard border-l-1 border-black pl-2 leading-4">
      상품 {totalQuantity}개
    </span>
  );
}
