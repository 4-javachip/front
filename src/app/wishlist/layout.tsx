import Footer from '@/components/layouts/footer/Footer';
import WishListHeader from '@/components/pages/wishlist/WishListHeader';
export default function addressshipingagreementlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WishListHeader />
      <div className="pt-15"> {children}</div>
      <Footer />
    </>
  );
}
