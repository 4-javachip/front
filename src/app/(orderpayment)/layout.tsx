import { CommonLayout } from '@/components/layouts/CommonLayout';
import PageHeader from '@/components/layouts/PageHeader';
import OrderItem from '@/components/pages/order/OrderItem';
import { OrderItemContextProvider } from '@/context/OrderItemContext';
import { PaymentSuccessProvider } from '@/context/PaymentSuccessContext';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CommonLayout.CommonHeader>
        <PageHeader title="배송지 수정" />
      </CommonLayout.CommonHeader>
      <OrderItemContextProvider>
        <PaymentSuccessProvider>
          <div>{children}</div>
        </PaymentSuccessProvider>
      </OrderItemContextProvider>
    </>
  );
}
