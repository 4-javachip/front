import Footer from '@/components/layouts/footer/Footer';
import OrderHeader from '@/components/pages/order/OrderHeader';

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrderHeader />
      <div> {children}</div>
      <Footer />
    </>
  );
}
