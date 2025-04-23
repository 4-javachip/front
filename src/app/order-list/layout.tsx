import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="주문 내역" />
      </CommonLayout.CommonHeader>
      <div className="pt-15">{children}</div>
    </>
  );
}
