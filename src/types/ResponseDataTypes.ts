export interface commonResponseType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

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
  subCategory?: ProductSubCategoryType[];
}

//메뉴 카테고리 타입
export interface CategoryMenuType {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface CategoryListType {
  thumbnail: string;
  categoryId: number;
  categoryName: string;
  description: string;
}

export interface FooterLinkItem {
  href: string;
  label: string;
}

//배송지
export interface AddressType {
  id: number;
  addressName: string;
  recipientName: string;
  baseAddress: string;
  zipCode: string;
  detailAddress?: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  shippingNote: string;
  defaultAddress?: boolean;
}

//장바구니상품
export interface CartProductType {
  userUuid: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  discountPrice: number;
  discountRate: number;
  productQuantity: number;
  checked: boolean;
  productOptionListUuid: string;
}

export interface SeasonType {
  name: string;
  seasonId: number;
}

export interface ProductSortOptionType {
  label: string;
  value: string;
}

export interface PolicyLinkType {
  href: string;
  label: string;
}

export enum AgreementTypeEnum {
  SIGN_UP = 0,
  SHIPPING_ADDRESS = 1,
}

export interface AgreementType {
  name: string;
  description: string;
  type: AgreementTypeEnum;
  required: boolean;
}

export interface OrderProductType {
  productName: string;
  productPrice: number;
  productQuantity: number;
  productOptionListUuid: string;
  productImageUrl: string;
  discountRate: number;
}
