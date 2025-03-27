import Footer from '@/components/layouts/footer/Footer';
import HeaderTop from '@/components/layouts/header/HeaderTop';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderTop />
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}
