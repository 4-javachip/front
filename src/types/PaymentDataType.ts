export interface PaymentDataType {
  totalOriginPrice: number;
  totalPurchasePrice: number;
  orderName: string;
  method: string | null;
}

export interface PaymentReturnType {
  chekcoutUrl: string;
  paymentUuid: string;
}
