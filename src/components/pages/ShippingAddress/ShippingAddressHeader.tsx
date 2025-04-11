import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import React from 'react';

export default function ShippingAddressHeader() {
  return (
    <CommonLayout.CommonHeader>
      <PageHeader title="배송지 추가" />
    </CommonLayout.CommonHeader>
  );
}
