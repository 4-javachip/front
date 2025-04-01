import { CommonLayout } from '@/components/layouts/CommonLayout';
import OrderCoupon from '@/components/pages/order/OrderCoupon';
import OrderList from '@/components/pages/order/OrderList';
import OrderPriceSummary from '@/components/pages/order/OrderPriceSummary';
import OrderShippingInfo from '@/components/pages/order/OrderShippingInfo';
import { dummyCartItems, dummyOrderProduct } from '@/data/dummyDatas';

import React from 'react';

export default function page() {
  const orderItems = dummyOrderProduct;

  return (
    <main>
      <CommonLayout.SectionInnerPadding>
        <OrderShippingInfo />
        <OrderList orderItems={orderItems} />
        <OrderCoupon />
      </CommonLayout.SectionInnerPadding>
      <CommonLayout.SectionNoPadding>
        <OrderPriceSummary orderItems={dummyCartItems} />
      </CommonLayout.SectionNoPadding>
    </main>
  );
}
