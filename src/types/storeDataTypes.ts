import { ProductOptionType } from './ProductResponseDataTypes';

export interface SignUpStoreStateType {
  emailId: string;
  emailDomain: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  name: string;
  year: string;
  month: string;
  date: string;
  phoneNumber: string;
  gender: string;
  emailVerificationCode: string;
  isEmailVerified: string;
  isEmailSent: string;
  isOptionalConsentChecked: string;
}

export interface SignInStoreStateType {
  email: string;
  password: string;
}

export interface EmailVerifyStateType {
  emailId: string;
  emailDomain: string;
  emailVerificationCode: string;
  isEmailVerified: string;
  isEmailSent: string;
}

export interface SelectedOptionWithNames extends ProductOptionType {
  colorName?: string;
  sizeName?: string;
}
