export interface BannerSlideImageType {
  id: number;
  imgUrl: string;
  description: string;
}

export interface ProductLabelType {
  isBest?: boolean;
  isNew?: boolean;
}

export interface ProductlItemType {
  id: number;
  thumbnail: string;
  label: ProductLabelType;
  name: string;
  price: number;
  salePrice?: number;
  discountRate: number;
}
