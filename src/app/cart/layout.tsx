import CartHeader from '@/components/pages/cart/CartHeader';
import CartPurchaseBar from '@/components/pages/cart/CartPurchaseBar';
export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartHeader />
      <div className="pt-15"> {children}</div>
      <CartPurchaseBar />
    </>
  );
}
