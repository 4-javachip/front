import CartHeader from '@/components/pages/cart/CartHeader';
import CartPerchaseBar from '@/components/pages/cart/CartPerchaseBar';
export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartHeader />
      <div className="pt-15"> {children}</div>
      <CartPerchaseBar />
    </>
  );
}
