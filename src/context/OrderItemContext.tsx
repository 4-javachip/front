'use client';

import React, { createContext, useContext, useState } from 'react';

export type PaymentPayload = {
  orderName: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  method: string;
  orderListUuid: string;
};

type OrderItemContextType = {
  paymentData: PaymentPayload;
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentPayload>>;
};

const defaultOrderItemData: PaymentPayload = {
  orderName: '',
  totalOriginPrice: 0,
  totalPurchasePrice: 0,
  method: '',
  orderListUuid: ',',
};

const OrderItemContext = createContext<OrderItemContextType | undefined>(
  undefined
);

export const useOrderItemContext = (): OrderItemContextType => {
  const context = useContext(OrderItemContext);
  if (!context) {
    throw new Error(
      'useOrderItemContext must be used within an OrderItemContextProvider'
    );
  }
  return context;
};

export const OrderItemContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [paymentData, setPaymentData] =
    useState<PaymentPayload>(defaultOrderItemData);

  return (
    <OrderItemContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </OrderItemContext.Provider>
  );
};
