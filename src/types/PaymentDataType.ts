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

export interface PaymentSuccessPayload {
  fromCart: boolean;
  orderItems: {
    productUuid: string;
    productOptionUuid: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[];
  totalOriginPrice: number;
  totalPurchasePrice: number;
  shippingAddressUuid: string;
  paymentUuid: string;
}

export interface PaymentSuccessReturnType {
  shippingAddressUuid: string;
  orderListUuid: string;
  paymentStatus: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  orderItems: {
    name: string;
    qauntity: number;
    thumbnail: string;
    sizeName: string;
    colorName: string;
  }[];
}
