import { OrderItemDataType } from '@/types/OrderDataType';
import { OrderProductType } from '@/types/ResponseDataTypes';
import React from 'react';

interface OrderItemSummaryProps {
  orderItems: OrderItemDataType[];
}

export default function OrderProductSummary({
  orderItems = [],
}: OrderItemSummaryProps) {
  const totalQuantity = orderItems.reduce(
    (sum, item) => sum + item.productQuantity,
    0
  );

  return (
    <span className="text-sm text-foreground font-medium font-pretendard border-l-1 border-black pl-2 leading-4">
      상품 {totalQuantity}개
    </span>
  );
}
