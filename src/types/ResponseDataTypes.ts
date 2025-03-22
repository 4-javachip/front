export interface BannerSlideImageType {
  id: number;
  imageUrl: string;
  description: string;
}

export interface ProductLabelType {
  isBest?: boolean;
  isNew?: boolean;
}

export interface ProductItemThumbnailType {
  imageUrl: string;
  description: string;
}

export interface ProductlItemType {
  id: number;
  thumbnail: ProductItemThumbnailType;
  label: ProductLabelType;
  name: string;
  price: number;
  salePrice?: number;
  discountRate: number;
}

export interface EventCarouselType {
  eventId: number;
  title: string;
  products: ProductlItemType[];
}

export interface CategoryListType {
  thumbnail: string;
  categoryId: number;
  categoryName: string;
}
