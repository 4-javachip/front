export interface PaymentDataType {
  totalOriginPrice: number;
  totalPurchasePrice: number;
  orderName: string;
  method: string;
}

export interface PaymentReturnType {
  checkoutUrl: string;
  paymentUuid: string;
}

export interface paymentConfirmData {
  paymentKey: string;
  orderId: string;
  amount: number;
}

export type PaymentPayload = {
  orderName: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  method: string;
  orderListUuid: string;
};
