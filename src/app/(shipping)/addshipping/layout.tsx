import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="배송지 추가" />
      </CommonLayout.CommonHeader>
      <div className="pt-15">{children}</div>
    </>
  );
}
