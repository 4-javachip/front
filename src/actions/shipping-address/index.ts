'use server';

import { ShippingAddressDataType } from '@/types/RequestDataTypes';

export const addShippingAddress = async (data: ShippingAddressDataType) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`배송지 등록 실패: ${response.statusText}`);
  }

  return await response.json(); // 필요에 따라 .text()나 .void 처리 가능
};
