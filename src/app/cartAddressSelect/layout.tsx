import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';

export default function addressSelectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      ={' '}
      <CommonLayout.CommonHeader>
        <PageHeader title="배송지 변경" />
      </CommonLayout.CommonHeader>
      <div className="pt-15"> {children}</div>
    </>
  );
}
