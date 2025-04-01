'use server';
import { CartProductType } from '@/types/ResponseDataTypes';
import { revalidateTag } from 'next/cache';

export const getCartData = async () => {
  const res = await fetch('http://localhost:3300/cart', {
    next: { tags: ['getCartData'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<CartProductType[]>;
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
