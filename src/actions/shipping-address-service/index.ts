'use server';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import {
  commonResponseType,
  ShippingAddressListType,
} from '@/types/ResponseDataTypes';

export const addShippingAddress = async (value: ShippingAddressDataType) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': 'test-2',
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
        'userUuid': 'test-2',
      },
      cache: 'no-store',
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
    (await res.json()) as commonResponseType<ShippingAddressDataType>;

  return data.result;
};

export const updateShippingAddress = async (value: ShippingAddressDataType) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': 'test-2',
      },
      body: JSON.stringify(value),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || '배송지 수정 실패');
  }
  const data =
    (await res.json()) as commonResponseType<ShippingAddressDataType>;
  console.log(data);
  return data.result;
};
