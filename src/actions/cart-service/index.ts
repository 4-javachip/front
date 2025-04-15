'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { CartItemType, CartProductItemType } from '@/types/CartDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';

import { revalidateTag } from 'next/cache';

export const getCartItemData = async (): Promise<CartItemType[]> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    next: { tags: ['getCartData'] },
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '장바구니 상품 조회 실패');
  }

  const data = (await res.json()) as CommonResponseType<CartItemType[]>;
  console.log('장바구니', data);
  return data.result;
};

export const getProductItem = async (
  productUuid: string
): Promise<CartProductItemType> => {
  console.log('productUuid', productUuid);
  const res = await fetch(
    `${process.env.LOCAL_BASE_URL}/api/v1/product/search?productUuid=${productUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<CartProductItemType>;
  console.log('productItem', data);
  return data.result;
};

export const cartItemCheck = async (
  productOptionListUuid: string,
  checked: boolean
) => {
  console.log('id', productOptionListUuid);
  console.log('checked', checked);
  const res = await fetch(
    `http://localhost:3300/cart/${productOptionListUuid}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        checked: checked,
      }),
    }
  );
  revalidateTag('getCartData');
  return res.json();
};

export const cartItemAllCheck = async (checked: boolean) => {
  // const res = await fetch(`http://localhost:3300/cart`, {
  //   method: 'PATCH',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     checked: checked,
  //   }),
  // });
  //  전체리스트의 checked값을 변경하는 api
  revalidateTag('getCartData');
  return null;
};

export const updateCartItemQuantity = async (
  cartUuid: string,
  quantity: number
) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  console.log('장바구니 uuid', cartUuid, '수량', quantity);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/quantity`, {
    method: 'UPDATE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      cartUuid: cartUuid,
      productQuantity: quantity,
    }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '장바구니 상품 수량 변경 실패');
  }
  // revalidateTag('getCartData');
};
