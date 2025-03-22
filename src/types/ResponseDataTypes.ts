export interface BannerSlideImageType {
  id: number;
  imageUrl: string;
  description: string;
}

export interface ProductLabelType {
  isBest?: boolean;
  isNew?: boolean;
}

export interface ThumbnailType {
  imageUrl: string;
  description: string;
}

export interface ProductItemType {
  id: number;
  thumbnail: ThumbnailType;
  label: ProductLabelType;
  name: string;
  price: number;
  salePrice?: number;
  discountRate: number;
}

export interface EventCarouselType {
  eventId: number;
  title: string;
  products: ProductItemType[];
}

// 카테고리

export interface ProductSubCategoryType {
  id: number;
  name: string;
}

export interface ProductCategoryType {
  id: number;
  name: string;
  subCategory: ProductSubCategoryType[];
}

export interface CategoryMenuType {
  id: number;
  name: string;
  thumbnail: ThumbnailType;
}

export interface CategoryListType {
  thumbnail: string;
  categoryId: number;
  categoryName: string;
}
