export interface BannerSlideImageType {
  id: number;
  imageUrl: string;
  description: string;
}

export interface ProductLabelType {
  isBest?: boolean;
  isNew?: boolean;
}

export interface ImageType {
  imageUrl: string;
  description: string;
}

// 리스트 상품
export interface ProductItemType {
  id: number;
  thumbnail: ImageType;
  label: ProductLabelType;
  name: string;
  price: number;
  salePrice?: number;
  discountRate: number;
}

// 상품 상세
export interface ProductDetailType {
  id: number;
  image: ImageType;
  label: ProductLabelType;
  name: string;
  description?: string;
  price: number;
  salePrice?: number;
  discountRate: number;
  detailDescription: string;
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
  thumbnail: ImageType;
}

export interface CategoryListType {
  thumbnail: string;
  categoryId: number;
  categoryName: string;
}
