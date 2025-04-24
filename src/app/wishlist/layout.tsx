import { CommonLayout } from '@/components/layouts/CommonLayout';
import Footer from '@/components/layouts/footer/Footer';
import PageHeader from '@/components/layouts/PageHeader';
export default function addressshipingagreementlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="찜 목록" />
      </CommonLayout.CommonHeader>
      <div className="pt-15"> {children}</div>
      <Footer />
    </>
  );
}
