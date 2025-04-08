import MyPageMenu from '@/components/pages/mypage/MyPageMenu';
import OrderDeliveryStatus from '@/components/pages/mypage/OrderDeliveryStatus';
import React from 'react';

export default function page() {
  return (
    <main>
      <OrderDeliveryStatus />
      <MyPageMenu />
    </main>
  );
}
