import Footer from '@/components/layouts/footer/Footer';
import CartPerchaseBar from '@/components/pages/cart/CartPerchaseBar';
import OrderHeader from '@/components/pages/order/OrderHeader';
import PerchaseBar from '@/components/pages/productDetail/PerchaseBar';
import React, { Children } from 'react';
export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrderHeader />
      <div className="pt-15"> {children}</div>
      <Footer />
      <CartPerchaseBar />
    </>
  );
}
