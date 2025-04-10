import Footer from '@/components/layouts/footer/Footer';
import SAHeader from '@/components/pages/shippingaddress-agreement/SAHeader';
export default function addressshipingagreementlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SAHeader />
      <div className="pt-15"> {children}</div>
      <Footer />
    </>
  );
}
