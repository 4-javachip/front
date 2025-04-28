'use server';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import {
  CommonResponseType,
  ShippingAddressListType,
} from '@/types/ResponseDataTypes';
import { revalidateTag } from 'next/cache';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { DefaultShippingAddressType } from '@/types/ShippingAddressDataType';
import { userShippingAgreementRequestType } from '@/types/AgreementDataType';
import { redirect } from 'next/navigation';

export const addShippingAddress = async (
  addressPayload: ShippingAddressDataType,
  agreementPayload: userShippingAgreementRequestType
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;

  const addressRes = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(addressPayload),
    }
  );

  if (!addressRes.ok) {
    const error = await addressRes.json();
    console.log('배송지 등록', addressRes);
  }

  console.log('배송지 등록 응답:', addressRes);

  const agreementRes = await fetch(
    `${process.env.BASE_API_URL}/api/v1/user-agreement`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(agreementPayload),
    }
  );

  if (!agreementRes.ok) {
    const error = await agreementRes.json();
  }
  console.log('배송지 약관동의:', agreementPayload);
  return {
    address: await addressRes.json(),
    agreement: await agreementRes.json(),
  };
};

export const getShippingAddressList = async (): Promise<
  ShippingAddressListType[]
> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address/list`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      next: { tags: ['getshippingAddressList'] },
    }
  );

  if (!res.ok) {
    redirect('/error');
  }

  const data = await res.json();
  console.log('ghfhf', data);
  return data.result;
};

export const getShippingAddressDatabyUuid = async (
  shippingAddressUuid: string
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address/${shippingAddressUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    redirect('/error');
  }

  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;
  return data.result;
};

export const updateShippingAddress = async (value: ShippingAddressDataType) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('배송지 수정 요청:', value);
  console.log('토큰', token);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    }
  );

  if (!res.ok) {
    redirect('/error');
  }
  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;
  console.log(data);
  return data.result;
};

export const deleteShippingAddress = async (shippingAddressUuid: string) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('배송지 삭제 요청:', shippingAddressUuid);

  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ shippingAddressUuid }),
    }
  );
  if (!res.ok) {
    redirect('/error');
  }
  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;
  revalidateTag('getshippingAddressList');
  console.log(data);
  return data.result;
};

export const shippingAddressAgreement = async () => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address/agreement`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    redirect('/error');
  }

  const data = await res.json();
  return data.result;
};

export const getDefaultShippingAddress =
  async (): Promise<DefaultShippingAddressType> => {
    const session = await getServerSession(options);
    const token =
      (await session?.user.accessToken) || session?.user.refreshToken;
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/shipping-address/user/default`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      redirect('/error');
    }

    const data =
      (await res.json()) as CommonResponseType<DefaultShippingAddressType>;

    return data.result;
  };
