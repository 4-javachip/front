export interface OrderListDataType {
  orderListUuid: string;
  orderCode: string;
  shippingAddressUuid: string;
  createdAt: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  discoutnRate: number;
}

// export interface RequestOrderDataType {
//   orderItemUuid: string[];
//   shippingAddressUuid: string;
//   totalOriginPrice: number;
//   totalPurchasePrice: number;
//   paymentUuid: string;
//   paymentStatus: string;
// }

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
