import { CommonLayout } from '@/components/layouts/CommonLayout';
import Footer from '@/components/layouts/footer/Footer';
import PageHeader from '@/components/layouts/PageHeader';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="리뷰" />
      </CommonLayout.CommonHeader>
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}
