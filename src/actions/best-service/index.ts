'use server';

import { BestProductType } from '@/types/ProductResponseDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { redirect } from 'next/navigation';

export async function getTop30BestProductDatas() {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/api/v1/best/list`, {
      method: 'GET',
      //   next: { revalidate: 24 * 60 * 60 },
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      redirect('/error');
    }
    const data = (await res.json()) as CommonResponseType<BestProductType[]>;

    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    console.log(error);
    redirect('/error');
  }
}

export async function getBestProductsByCategoryId(categoryId: number) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/best/category/${categoryId}`,
      {
        method: 'GET',
        //   next: { revalidate: 24 * 60 * 60 },
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      redirect('/error');
    }
    const data = (await res.json()) as CommonResponseType<BestProductType[]>;

    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    console.log(error);
    redirect('/error');
  }
}
