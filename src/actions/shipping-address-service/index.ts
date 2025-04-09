'use server';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import {
  CommonResponseType,
  ShippingAddressListType,
} from '@/types/ResponseDataTypes';
import { revalidateTag } from 'next/cache';

export const addShippingAddress = async (value: ShippingAddressDataType) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          process.env.ACCESS_TOKEN || process.env.REFRESH_TOKEN
        }`,
      },
      body: JSON.stringify(value),
    }
  );

  if (!response.ok) {
    throw new Error(`배송지 등록 실패: ${response.statusText}`);
  }

  return await response.json();
};

export const getShippingAddressList = async (): Promise<
  ShippingAddressListType[]
> => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address/list`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          process.env.ACCESS_TOKEN || process.env.REFRESH_TOKEN
        }`,
      },
      next: { tags: ['getshippingAddressList'] },
    }
  );

  if (!res.ok) {
    throw new Error(`배송지 조회 실패: ${res.statusText}`);
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
    throw new Error(`배송지 조회 실패: ${res.statusText}`);
  }

  const data =
    (await res.json()) as CommonResponseType<ShippingAddressDataType>;

  return data.result;
};

export const updateShippingAddress = async (value: ShippingAddressDataType) => {
  console.log('배송지 수정 요청:', value);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          process.env.ACCESS_TOKEN || process.env.REFRESH_TOKEN
        }`,
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
        'Authorization': `Bearer ${
          process.env.ACCESS_TOKEN || process.env.REFRESH_TOKEN
        }`,
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
