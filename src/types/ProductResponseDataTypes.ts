export interface ProductListDataType {
  productUuid: string;
  name: string;
}

export interface ProductThumbnailDataType {
  id: number;
  productUuid: string;
  thumbnailUrl: string;
  description: string;
  defaulted: boolean;
}

export interface ProductOptionType {
  productUuid: string;
  colorOptionId?: number;
  sizeOptionId?: number;
  stock: number;
  price: number;
  discountRate: number;
  totalPrice: number;
}

export interface ProductDescriptionType {
  productUuid: string;
  productOptionUuid: string;
  description: string;
  detailDescription: string;
}
