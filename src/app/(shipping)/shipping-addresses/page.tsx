import { CommonLayout } from '@/components/layouts/CommonLayout';
import ShippingAddressList from '@/components/pages/ShippingAddress/ShippingAddressList';
import CommonButton from '@/components/ui/buttons/CommonButton';
import React from 'react';

export default function page() {
  return (
    <div>
      <CommonLayout.SectionInnerPadding>
        <ShippingAddressList />
        <CommonButton className="font-semibold" type="submit" isEnabled={true}>
          + 새 배송지 추가하기
        </CommonButton>
      </CommonLayout.SectionInnerPadding>
    </div>
  );
}
