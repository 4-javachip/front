import OrderHeader from '@/components/pages/order/OrderHeader';
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
    </>
  );
}
