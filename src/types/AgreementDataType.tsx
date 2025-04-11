import { AgreementTypeEnum } from './ResponseDataTypes';

export interface ShipingAddressAGgreementType {
  id: number;
  name: string;
  description: string;
  required: boolean;
  type: AgreementTypeEnum;
}

// 유저 약관 동의 여부
export interface UserAgreementType {
  agreementId: number;
  agreed: boolean;
  userUuid: string;
  userAgreementUuid: string;
}

// 약관 동의 비동의 여부
export interface AgreementType {
  agreementId: number;
  agreed: boolean;
}
