import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import CommonButton from '@/components/ui/buttons/CommonButton';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="배송지 수정" />
      </CommonLayout.CommonHeader>
      <div className="pt-15">
        {children}
        <CommonLayout.FixedButtonBgLayout>
          <CommonButton
            className="font-semibold"
            type="submit"
            isEnabled={true}
          >
            수정하기
          </CommonButton>
        </CommonLayout.FixedButtonBgLayout>
      </div>
    </>
  );
}
