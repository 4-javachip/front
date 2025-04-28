import { AgreementTypeEnum } from './ResponseDataTypes';

export interface ShipingAddressAgreementType {
  id: number;
  name: string;
  description: string;
  required: boolean;
  type: AgreementTypeEnum;
}

export interface UserAgreementType {
  agreementId: number;
  agreed: boolean;
  userUuid: string;
  userAgreementUuid: string;
}

export interface userShippingAgreementRequestType {
  agreementId: number;
  agreed: boolean | null;
}
