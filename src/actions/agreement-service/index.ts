'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  ShipingAddressAgreementType,
  UserAgreementType,
  userShippingAgreementRequestType,
} from '@/types/AgreementDataType';

import { AgreementType, CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

//배송지 동의 & 비동의
export const userAgreement = async (
  payload: userShippingAgreementRequestType
) => {
  // console.log('배송지 정보 수집 및 이용 동의 여부 요청:', Agreement);
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/user-agreement`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message || '배송지 정보 수집 및 이용 동의 여부 조회 실패'
    );
  }

  const data = (await res.json()) as CommonResponseType<AgreementType>;
  revalidateTag('get-user-agreement');
  console.log('배송지 정보 수집 및 이용 동의 여부 응답:', data);

  return data.result;
};

//배송지 약관 내용 조회
export const getShippingAddressAgreement = async (): Promise<
  ShipingAddressAgreementType[]
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
  console.log('배송지 정보 수집 및 이용 동의 내용 조회 응답:', res);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message || '배송지 정보 수집 및 이용 동의 내용 조회 실패'
    );
  }

  const data = (await res.json()) as CommonResponseType<
    ShipingAddressAgreementType[]
  >;

  return data.result;
};

//유저 배송지 동의 여부 조회
export const getUserShippingAddressAgreement = async (): Promise<
  UserAgreementType[]
> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('토큰', token);

  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/user-agreement/shipping-address`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      next: { tags: ['get-user-agreement'] },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message || '배송지 정보 수집 및 이용 동의 내용 조회 실패'
    );
  }

  const data = (await res.json()) as CommonResponseType<UserAgreementType[]>;

  return data.result;
};
