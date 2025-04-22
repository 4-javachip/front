export interface OrderListDataType {
  orderListUuid: string;
  orderCode: string;
  shippingAddressUuid: string;
  createdAt: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  discoutnRate: number;
}

export interface OrderItemDataType {
  cartUuid: string;
  productQuantity: number;
  checked: boolean;
  productUuid: string;
  productOptionUuid: string;
}

export interface OrderListDetailDataType {
  orderListUuid: string;
  orderDetailUuid: string;
  name: string;
  thumbnail: string;
  totalORiginPrice: number;
  discountRate: number;
  totalPurchasePrice: number;
  quantity: number;
}

export interface EnrichedOrderItemDataType {
  productUuid: string;
  productName: string;
  productPrice: number;
  productSalePrice: number;
  cartUuid: string;
  quantity: number;
  optionUuid: string;
  optionSizeId: number;
  optionColorId: number;
  optionDiscount: number;
  orderName: string;
  isChecked: boolean;
}

export interface OrderItemPayload {
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
}
export interface RecentOrderItemDataType {
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
  recipientName: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  phoneNumber: string;
  shippingNote?: string;
  secondPhoneNumber?: string;
}
