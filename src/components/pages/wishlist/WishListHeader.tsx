import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import React from 'react';

export default function WishListHeader() {
  return (
    <CommonLayout.CommonHeader>
      <PageHeader title="찜 목록" />
    </CommonLayout.CommonHeader>
  );
}
