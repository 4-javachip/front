import Footer from '@/components/layouts/footer/Footer';
import CartPurchaseBar from '@/components/pages/cart/CartPurchaseBar';
import OrderHeader from '@/components/pages/order/OrderHeader';
import PurchaseBar from '@/components/pages/productDetail/PurchaseBar/PurchaseBar';
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
      <CartPurchaseBar />
    </>
  );
}
