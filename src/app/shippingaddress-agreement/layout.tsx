import Footer from '@/components/layouts/footer/Footer';
export default function addressshipingagreementlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="pt-15"> {children}</div>
      <Footer />
    </>
  );
}
