import { CommonLayout } from '@/components/layouts/CommonLayout';
import AddShippingAddress from '@/components/pages/ShippingAddress/AddShippingAddress';
import CommonButton from '@/components/ui/buttons/CommonButton';
import React from 'react';

export default function page() {
  return (
    <main>
      <h1 className="py-[1.25rem] text-[1.625rem] font-semibold font-pretendard px-6">
        배송지 정보
      </h1>
      <AddShippingAddress />
      {/* <CommonLayout.FixedButtonBgLayout>
        <CommonButton className="font-semibold" type="submit" isEnabled={true}>
          등록하기
        </CommonButton>
      </CommonLayout.FixedButtonBgLayout> */}
    </main>
  );
}
