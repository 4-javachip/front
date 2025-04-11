'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  ShipingAddressAGgreementType,
  UserAgreementType,
} from '@/types/AgreementDataType';

import { AgreementType, CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
const session = await getServerSession(options);
const token = (await session?.user.accessToken) || session?.user.refreshToken;

//배송지 동의 & 비동의
export const Agreement = async (Agreement: AgreementType) => {
  console.log('배송지 정보 수집 및 이용 동의 여부 요청:', Agreement);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/user-agreement`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(Agreement),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message || '배송지 정보 수집 및 이용 동의 여부 조회 실패'
    );
  }

  const data = (await res.json()) as CommonResponseType<AgreementType>;

  return data.result;
};

//배송지 약관 내용 조회
export const getShippingAddressAgreement = async (): Promise<
  ShipingAddressAGgreementType[]
> => {
  console.log('배송지 정보 수집 및 이용 동의 내용 조회 요청');
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/agreement/shipping-address`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message || '배송지 정보 수집 및 이용 동의 내용 조회 실패'
    );
  }

  const data = (await res.json()) as CommonResponseType<
    ShipingAddressAGgreementType[]
  >;

  return data.result;
};

//유저 배송지 동의 여부 조회
export const getUserShippingAddressAgreement = async (): Promise<
  UserAgreementType[]
> => {
  console.log('토큰', token);

  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/user-agreement/shipping-address`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const data = (await res.json()) as CommonResponseType<UserAgreementType[]>;

  if (!data.isSuccess) {
    return [
      {
        agreementId: 1,
        agreed: false,
        userUuid: '',
        userAgreementUuid: '',
      },
    ];
  }

  // ✅ 성공 시 실제 동의 정보 반환
  return data.result;
};
