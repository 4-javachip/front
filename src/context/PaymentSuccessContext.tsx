'use client';

import { PaymentSuccessPayload } from '@/types/PaymentDataType';
import { createContext, useContext, useState, ReactNode } from 'react';

type PaymentSuccessContextType = {
  paymentSuccessData: PaymentSuccessPayload;
  setPaymentSuccessData: React.Dispatch<
    React.SetStateAction<PaymentSuccessPayload>
  >;
};

const defaultData: PaymentSuccessPayload = {
  fromCart: true,
  orderItems: [],
  totalOriginPrice: 0,
  totalPurchasePrice: 0,
  shippingAddressUuid: '',
  paymentUuid: '',
};

const PaymentSuccessContext = createContext<
  PaymentSuccessContextType | undefined
>(undefined);

export const usePaymentSuccessContext = () => {
  const context = useContext(PaymentSuccessContext);
  if (!context)
    throw new Error(
      'usePaymentSuccessContext must be used within PaymentSuccessProvider'
    );
  return context;
};

export const PaymentSuccessProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [paymentSuccessData, setPaymentSuccessData] = useState(defaultData);

  return (
    <PaymentSuccessContext.Provider
      value={{ paymentSuccessData, setPaymentSuccessData }}
    >
      {children}
    </PaymentSuccessContext.Provider>
  );
};
