export interface PaginatedResponseType<T> {
  content: T;
  nextCursor: number;
  hasNext: boolean;
  pageSize: number;
  page: number;
}

export interface ProductNameDataType {
  productUuid: string;
  name: string;
  best: boolean;
  new: boolean;
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
  description: string;
  detailDescription: string;
}

export interface ProductInfoDataType {
  name: string;
  price: number;
  totalPrice: number;
  discountRate: number;
  description?: string;
  best: boolean;
  new: boolean;
}
