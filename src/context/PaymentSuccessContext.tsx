// 'use client';

// import { OrderItemPayload } from '@/types/PaymentDataType';
// import { createContext, useContext, useState, ReactNode } from 'react';

// type PaymentSuccessContextType = {
//   paymentSuccessData: OrderItemPayload;
//   setPaymentSuccessData: React.Dispatch<React.SetStateAction<OrderItemPayload>>;
// };

// const defaultData: OrderItemPayload = {
//   fromCart: true,
//   orderItems: [],
//   totalOriginPrice: 0,
//   totalPurchasePrice: 0,
//   shippingAddressUuid: '',
// };

// const PaymentSuccessContext = createContext<
//   PaymentSuccessContextType | undefined
// >(undefined);

// export const usePaymentSuccessContext = () => {
//   const context = useContext(PaymentSuccessContext);
//   if (!context)
//     throw new Error(
//       'usePaymentSuccessContext must be used within PaymentSuccessProvider'
//     );
//   return context;
// };

// export const PaymentSuccessProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [paymentSuccessData, setPaymentSuccessData] = useState(defaultData);

//   return (
//     <PaymentSuccessContext.Provider
//       value={{ paymentSuccessData, setPaymentSuccessData }}
//     >
//       {children}
//     </PaymentSuccessContext.Provider>
//   );
// };
