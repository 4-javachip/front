import React from 'react';
import CartPriceSummary from '../cart/CartPriceSummary';
import { CartProductType } from '@/types/ResponseDataTypes';

export interface OrderPriceSummaryProps {
  orderItems: CartProductType[];
}

export default function OrderPriceSummary({
  orderItems,
}: OrderPriceSummaryProps) {
  return (
    // <CartPriceSummary
    //   cartItemList={orderItems}
    //   labelProductTotal="주문 금액"
    //   labelDiscountTotal="할인"
    //   labelFinalTotal="총 결제 금액"
    //   className="bg-gray-50 rounded-xl py-4 px-4 mt-8"
    <div></div>
    // />
  );
}
