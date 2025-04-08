import { CommonLayout } from '@/components/layouts/CommonLayout';
import AddShippingAddressHeader from '@/components/pages/ShippingAddress/AddShippingAddressHeader';
import CommonButton from '@/components/ui/buttons/CommonButton';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AddShippingAddressHeader />
      <div className="pt-15">
        {children}
        <CommonLayout.FixedButtonBgLayout>
          <CommonButton
            className="font-semibold"
            type="submit"
            isEnabled={true}
          >
            등록하기
          </CommonButton>
        </CommonLayout.FixedButtonBgLayout>
      </div>
    </>
  );
}
