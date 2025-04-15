import { ShippingAddressDataType } from './RequestDataTypes';

export type ShippingAddressErrorType = {
  [K in keyof ShippingAddressDataType]?: string;
};
