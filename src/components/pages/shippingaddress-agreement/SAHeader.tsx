import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import React from 'react';

export default function SAHeader() {
  return (
    <CommonLayout.CommonHeader>
      <PageHeader title="배송지 정보 수집 및 이용 동의" />
    </CommonLayout.CommonHeader>
  );
}
