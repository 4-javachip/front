'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { CartItemListType, CartProductItemType } from '@/types/CartDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';

import { revalidateTag } from 'next/cache';

export const getCartItemData = async (): Promise<CartItemListType[]> => {
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

  const data = await res.json();
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
