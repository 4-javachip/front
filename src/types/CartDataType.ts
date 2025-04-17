export interface CartItemType {
  userUuid: string;
  cartUuid: string;
  productQuantity: number;
  checked: boolean;
  productUuid: string;
  productOptionUuid: string;
}

export interface CartProductItemType {
  productUuid: string;
  name: string;
}
