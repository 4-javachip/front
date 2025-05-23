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
import { redirect } from 'next/navigation';

export const userAgreement = async (
  payload: userShippingAgreementRequestType
) => {
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
    redirect('/error');
  }

  const data = (await res.json()) as CommonResponseType<AgreementType>;
  revalidateTag('get-user-agreement');
  return data.result;
};

export const getShippingAddressAgreement = async (): Promise<
  ShipingAddressAgreementType[]
> => {
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
    redirect('/error');
  }

  const data = (await res.json()) as CommonResponseType<
    ShipingAddressAgreementType[]
  >;

  return data.result;
};

export const getUserShippingAddressAgreement = async (): Promise<
  UserAgreementType[]
> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('토큰', token);
  if (!token) return [];
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
    redirect('/error');
  }

  const data = (await res.json()) as CommonResponseType<UserAgreementType[]>;

  return data.result;
};
