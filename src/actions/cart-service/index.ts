'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  AddCartItemDataType,
  CartItemType,
  CartProductItemType,
} from '@/types/CartDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export const getCartItemData = async (): Promise<CartItemType[]> => {
  const session = await getServerSession(options);
  if (!session) return [];

  const token = (await session?.user.accessToken) || session?.user.refreshToken;

  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    next: { tags: ['getCartData'] },
  });
  const data = (await res.json()) as CommonResponseType<CartItemType[]>;
  if (!res.ok) {
    return [];
  }

  return data.result;
};

export const getProductItem = async (
  productUuid: string
): Promise<CartProductItemType> => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/product/search?productUuid=${productUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as CommonResponseType<CartProductItemType>;
  console.log('productItem', data);
  revalidateTag('getCartData');
  return data.result;
};

export const cartItemCheck = async (cartUuid: string, checked: boolean) => {
  const session = await getServerSession(options);
  if (!session) {
    return {
      success: false,
      message: '로그인이 필요한 서비스입니다.',
    };
  }
  const token = (await session?.user.accessToken) || session?.user.refreshToken;

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
  }
  revalidateTag('getCartData');
  return res.json();
};

export const checkedAllItem = async (checked: boolean) => {
  try {
    const session = await getServerSession(options);
    const token = session?.user.accessToken || session?.user.refreshToken;
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/cart/checked/all`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ checked }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error('전체 체크 실패:', errorData);
      return { success: false, message: errorData.message || '전체 체크 실패' };
    }

    revalidateTag('getCartData');
    return { success: true };
  } catch (error) {
    return { success: false, message: '서버 오류가 발생했습니다.' };
  }
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
  }
  revalidateTag('getCartData');
};

export async function AddCartItemAction(AddCartItemData: AddCartItemDataType) {
  const session = await getServerSession(options);
  if (!session)
    return {
      success: false,
      message: '로그인이 필요한 서비스입니다. 로그인 후 다시 시도해주세요.',
    };

  const token = await session.user.accessToken;

  const payload: Partial<AddCartItemDataType> = { ...AddCartItemData };
  console.log(payload);
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('add cart failed:', errorData);

      return { success: errorData.success, message: errorData.message };
    }

    const data = await response.json();
    revalidateTag('getCartData');

    return { success: data.success, message: '장바구니에 상품이 담겼습니다.' };
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}
