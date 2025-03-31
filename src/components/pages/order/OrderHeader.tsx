import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';

export default function CartHeader() {
  return (
    <CommonLayout.CommonHeader>
      <PageHeader title="결제하기" />
    </CommonLayout.CommonHeader>
  );
}
