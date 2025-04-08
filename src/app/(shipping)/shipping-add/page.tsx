import AddShippingAddress from '@/components/pages/ShippingAddress/AddShippingAddress';
import React from 'react';

export default function page() {
  return (
    <main>
      <h1 className="py-[1.25rem] text-[1.625rem] font-semibold font-pretendard px-6">
        배송지 정보
      </h1>
      <AddShippingAddress />
    </main>
  );
}
