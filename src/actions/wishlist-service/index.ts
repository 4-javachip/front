'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export const toggleWishlist = async (productUuid: string): Promise<void> => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;

  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/wishlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ productUuid }),
  });

  if (!res.ok) {
    const error = await res.json();
    revalidateTag('getWishlistChecked');
    throw new Error(error.message || '찜 토글 실패');
  }
};

export const getWishlistChecked = async (
  productUuid: string
): Promise<boolean> => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;

  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/wishlist/product/${productUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      next: { tags: ['getWishlistChecked'] },
    }
  );
  console.log('찜 상태 조회 응답:', res);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || '찜 상태 조회 실패');
  }

  const result = await res.json();
  return result.result.checked;
};
export const getWishProducts = async (): Promise<{ productUuid: string }[]> => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;

  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/wishlist`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || '찜 상태 조회 실패');
  }

  const data = await res.json();
  return data.result;
};
