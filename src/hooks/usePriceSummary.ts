import { useMemo } from 'react';
import { CartItemPriceData } from '@/types/CartDataType';

export interface PriceSummary {
  orderProductPrice: number;
  discountTotal: number;
  totalPrice: number;
}

export function usePriceSummary(orderItems: CartItemPriceData[]): PriceSummary {
  return useMemo(() => {
    return orderItems.reduce<PriceSummary>(
      (acc, item) => {
        acc.orderProductPrice += item.productPrice;
        acc.totalPrice += item.productSalePrice;
        acc.discountTotal += item.productPrice - item.productSalePrice;
        return acc;
      },
      {
        orderProductPrice: 0,
        discountTotal: 0,
        totalPrice: 0,
      }
    );
  }, [orderItems]);
}
