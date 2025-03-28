import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';

export default function CartHeader() {
  return (
    <CommonLayout.CommonHeader>
      <PageHeader title="장바구니" />
    </CommonLayout.CommonHeader>
  );
}
