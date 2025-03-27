import CartHeader from '@/components/pages/cart/CartHeader';
import React, { Children } from 'react';
export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartHeader />
      <div className="pt-15"> {children}</div>
    </>
  );
}
