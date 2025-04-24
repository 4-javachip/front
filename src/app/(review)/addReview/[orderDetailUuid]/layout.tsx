import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="리뷰 작성" />
      </CommonLayout.CommonHeader>
      <main className="pt-14">{children}</main>
    </>
  );
}
