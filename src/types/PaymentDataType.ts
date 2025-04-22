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

export interface PaymentSuccessReturnType {
  orderListUuid: string;
  paymentStatus: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  method: string;
  orderItems: {
    ProductUuid: string;
    name: string;
    qauntity: number;
    thumbnail: string;
    sizeName: string;
    colorName: string;
  }[];
  addressName: string;
  recicpientName: string;
  ziquCode: string;
  baseAddress: string;
  detailAddress: string;
  phoneNumber: string;
  shippingNote?: string;
  secondPhoneNumber?: string;
}
