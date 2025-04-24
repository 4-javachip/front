export interface SignUpDataType {
  email: string;
  password: string;
  nickname?: string;
  name: string;
  birthdate: string;
  phoneNumber: string;
  gender: string;
}

export interface OAuthSignUpDataType {
  password: string;
  nickname: string;
  name: string;
  birthdate: string;
  phoneNumber: string;
  gender: string;
}

export interface SignInDataType {
  email: string;
  password: string;
}

export interface ShippingAddressDataType {
  shippingAddressUuid: string;
  addressName: string;
  recipientName: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  shippingNote?: string;
  defaulted: boolean;
  usershippingagreed?: boolean;
}

export interface getProductDataType {
  categoryId?: number;
  subCategoryId?: number;
  seasonId?: number;
  sortType?: string;
  keyword?: string;
  cursor?: number;
  pageSize?: number;
  page?: number;
}

export interface UserAgreementType {
  agreementId: number;
  agreed: boolean;
}

// review
export interface getReviewDataType {
  productUuid: string;
  sortType?: string;
  page?: number;
  pageSize: number;
}

export interface addReviewDataType {
  productUuid: string;
  title: string;
  content: string;
  rating: number;
  orderDetailUuid: string;
}
