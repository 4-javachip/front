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
        <PageHeader title="배송지 정보 수집 및 이용 동의" />
      </CommonLayout.CommonHeader>
      <div className="pt-15"> {children}</div>
      <Footer />
    </>
  );
}
