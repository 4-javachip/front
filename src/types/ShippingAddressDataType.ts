export interface DefaultShippingAddressType {
  shippingAddressUuid: string;
  addressName: string;
  recipientName: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  shippingNote: string;
  defaulted: boolean;
}
