'use server';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import {
  CommonResponseType,
  ShippingAddressListType,
} from '@/types/ResponseDataTypes';
import { revalidateTag } from 'next/cache';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const session = await getServerSession(options);
const token = (await session?.user.accessToken) || session?.user.refreshToken;

export const addShippingAddress = async (value: ShippingAddressDataType) => {
  console.log('토큰', token);
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(value),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '배송지 추가 실패');
  }

  return await response.json();
};

//배송지 목록 조회
export const getShippingAddressList = async (): Promise<
  ShippingAddressListType[]
> => {
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
    const errorData = await res.json();
    throw new Error(errorData.message || '배송지 목록 조회 실패');
  }

  const data = await res.json();
  console.log('ghfhf', data);
  return data.result;
};

export const getShippingAddressDatabyUuid = async (
  shippingAddressUuid: string
) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address/${shippingAddressUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '배송지 상세 조회 실패');
  }

  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;

  return data.result;
};

export const updateShippingAddress = async (value: ShippingAddressDataType) => {
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
    const error = await res.json();
    throw new Error(error.message || '배송지 수정 실패');
  }
  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;
  console.log(data);
  return data.result;
};

export const deleteShippingAddress = async (shippingAddressUuid: string) => {
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
    const error = await res.json();
    throw new Error(error.message || '배송지 삭제 실패');
  }
  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;
  revalidateTag('getshippingAddressList');
  console.log(data);
  return data.result;
};
