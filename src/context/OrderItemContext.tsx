'use client';

import React, { createContext, useContext, useState } from 'react';

// 결제 요청에 사용할 데이터 타입
export type OrderItemPaymentPayload = {
  orderName: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  method: string | null;
};

// Context 내부에서 사용할 타입
type OrderItemContextType = {
  paymentData: OrderItemPaymentPayload;
  setPaymentData: React.Dispatch<React.SetStateAction<OrderItemPaymentPayload>>;
};

// 초기값 세팅
const defaultPaymentData: OrderItemPaymentPayload = {
  orderName: '',
  totalOriginPrice: 0,
  totalPurchasePrice: 0,
  method: null,
};

// Context 생성
const OrderItemContext = createContext<OrderItemContextType | undefined>(
  undefined
);

// ✅ Context 사용 훅
export const useOrderItemContext = (): OrderItemContextType => {
  const context = useContext(OrderItemContext);
  if (!context) {
    throw new Error(
      'useOrderItemContext must be used within an OrderItemContextProvider'
    );
  }
  return context;
};

// ✅ Provider 컴포넌트
export const OrderItemContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [paymentData, setPaymentData] =
    useState<OrderItemPaymentPayload>(defaultPaymentData);

  return (
    <OrderItemContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </OrderItemContext.Provider>
  );
};
