import { CommonLayout } from '@/components/layouts/CommonLayout';
import OrderInfo from '@/components/pages/order/OrderInfo';
import OrderShippingInfo from '@/components/pages/order/OrderShippingInfo';
import { dummyCartItems } from '@/data/dummyDatas';

import React from 'react';

export default function page() {
  return (
    <CommonLayout.SectionInnerPadding>
      <OrderShippingInfo />
      <OrderInfo cartItems={dummyCartItems} />
    </CommonLayout.SectionInnerPadding>
  );
}
