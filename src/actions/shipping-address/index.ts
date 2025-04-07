import { ShippingAddressDataType } from '@/types/RequestDataTypes';

export const addShippingAddress = async (value: ShippingAddressDataType) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/shipping-address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': 'test-1',
      },
      body: JSON.stringify(value),
    }
  );

  if (!response.ok) {
    throw new Error(`배송지 등록 실패: ${response.statusText}`);
  }

  return await response.json(); // 필요에 따라 .text()나 .void 처리 가능
};
