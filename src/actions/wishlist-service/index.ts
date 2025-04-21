'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

// export async function getToggleWishList(productUuid: string) {
//   const session = await getServerSession(options);
//   if (!session)
//     return {
//       success: false,
//       message: '로그인이 필요한 서비스입니다. 로그인 후 다시 시도해주세요.',
//     };

//   const token = session?.user.accessToken || session?.user.refreshToken;
//   try {
//     const res = await fetch(
//       `${process.env.BASE_API_URL}/api/v1/wishlist/product/${productUuid}`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       }
//     );
//     if (!res.ok) {
//       const errorData = await res.json();
//       console.error('add cart failed:', errorData);
//       // throw new Error(errorData.message);
//       return { success: errorData.success, message: errorData.message };
//     }

//     const data = await res.json();
//     return { success: data.success, message: data.message };
//   } catch (error) {
//     return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
//   }
// }

export const toggleWishlist = async (productUuid: string) => {
  const session = await getServerSession(options);

  if (!session) {
    return {
      success: false,
      message: '로그인이 필요한 서비스입니다. 로그인 후 다시 시도해주세요.',
    };
  }

  const token = session.user.accessToken || session.user.refreshToken;
  const payload = { productUuid };

  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/wishlist`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('toggleWishlist failed:', errorData);
      return {
        success: errorData.success ?? false,
        message: errorData.message ?? '요청 실패',
      };
    }

    revalidateTag('wishlist');

    const data = await response.json();
    return {
      success: data.success ?? true,
      message: data.message ?? '찜 처리 완료',
    };
  } catch (error) {
    console.error('toggleWishlist error:', error);
    return {
      success: false,
      message: '알 수 없는 오류가 발생했습니다.',
    };
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
    next: { tags: ['wishlist'] },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || '찜 상태 조회 실패');
  }

  const data = await res.json();
  return data.result;
};
