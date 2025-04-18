'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { CartItemType, CartProductItemType } from '@/types/CartDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';

import { revalidateTag } from 'next/cache';

export const getCartItemData = async (): Promise<CartItemType[]> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  if (!token) return [];
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
    `${process.env.BASE_API_URL}/api/v1/product/search?productUuid=${productUuid}`,
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

export const cartItemCheck = async (cartUuid: string, checked: boolean) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  if (!token) return;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/checked`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },

    body: JSON.stringify({
      cartUuid,
      checked,
    }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '장바구니 상품 수량 변경 실패');
  }
  revalidateTag('getCartData');
  console.log('장바구니 체크', cartUuid, checked);
  return res.json();
};

export const checkedAllItem = async (checked: boolean) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  if (token) return;
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/cart/checked/all`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        checked: checked,
      }),
    }
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '장바구니 전체선택 실패');
  }
  revalidateTag('getCartData');
};

export const updateCartItemQuantity = async (
  cartUuid: string,
  quantity: number
) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  if (!token) return;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/quantity`, {
    method: 'PUT',
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

  revalidateTag('getCartData');
};

export const deleteCartItem = async (cartUuid: string) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  if (!token) return;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      cartUuid: cartUuid,
    }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '장바구니 상품 삭제 실패');
  }
  revalidateTag('getCartData');
};

export const deleteAllCartItem = async () => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  if (!token) return;
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/all`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '장바구니 상품 삭제 실패');
  }
  revalidateTag('getCartData');
};
