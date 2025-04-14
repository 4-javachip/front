export interface CartItemListType {
  userUuid: string;
  cartUuid: string;
  productQauntity: number;
  checked: boolean;
  productUuid: string;
  productOptionUuid: string;
}

export interface CartProductItemType {
  productUuid: string;
  name: string;
}
