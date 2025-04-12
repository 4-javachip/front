export interface SignUpDataType {
  email: string;
  password: string;
  nickname?: string;
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
  shippingAddressUuid?: string;
  addressName: string;
  recipientName: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  shippingNote?: string;
  defaulted: boolean;
}


export interface getProductDataType {
  categoryId?: number;
  subCategoryId?: number;
  seasonId?: number;
  sortType?: 'PRICE_ASC' | 'PRICE_DESC' | 'RECOMMEND';
  keyword?: string;
  cursor?: number;
  pageSize?: number;
  page?: number;

export interface UserAgreementType {
  agreementId: number;
  agreed: boolean;
}
