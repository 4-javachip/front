import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="장바구니" />
      </CommonLayout.CommonHeader>
      <div className="pt-15"> {children}</div>
    </>
  );
}
