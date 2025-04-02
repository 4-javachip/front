'use server';

import {
  CartListDataType,
  commonResponseType,
  CartProductItemType,
} from '@/types/ResponseDataTypes';

const userUuid = '12345678';
export const getCartDataList = async (): Promise<CartListDataType[]> => {
  const res = await fetch(
    `${process.env.LOCAL_BASE_URL}/api/v1/cart/user/${userUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as commonResponseType<CartListDataType[]>;
  console.log('cartData', data);
  return data.result;
};

export const getProductItem = async (
  productUuid: string
): Promise<CartProductItemType> => {
  console.log('productUuid', productUuid);
  const res = await fetch(
    `${process.env.LOCAL_BASE_URL}/api/v1/product/search?productUuid=${productUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = (await res.json()) as commonResponseType<CartProductItemType>;
  console.log('productItem', data);
  return data.result;
};
// import { CartProductType } from '@/types/ResponseDataTypes';
// import { revalidateTag } from 'next/cache';

// export const getCartData = async () => {
//   const res = await fetch('http://localhost:3300/cart', {
//     next: { tags: ['getCartData'] },
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json() as Promise<CartProductType[]>;
// };

// export const cartItemCheck = async (
//   productOptionListUuid: string,
//   checked: boolean
// ) => {
//   console.log('id', productOptionListUuid);
//   console.log('checked', checked);
//   const res = await fetch(
//     `http://localhost:3300/cart/${productOptionListUuid}`,
//     {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         checked: checked,
//       }),
//     }
//   );
//   revalidateTag('getCartData');
//   return res.json();
// };

// export const cartItemAllCheck = async (checked: boolean) => {
//   // const res = await fetch(`http://localhost:3300/cart`, {
//   //   method: 'PATCH',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify({
//   //     checked: checked,
//   //   }),
//   // });
//   //  전체리스트의 checked값을 변경하는 api
//   revalidateTag('getCartData');
//   return null;
// };
