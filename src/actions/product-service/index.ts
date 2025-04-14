'use server';
import { cache } from 'react';
import 'server-only';

import {
  PaginatedResponseType,
  ProductDescriptionType,
  ProductNameDataType,
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';

export const getProductListData = cache(
  async ({ pageSize, page }: { pageSize: number; page: number }) => {
    // const query = page !== undefined ? `&page=${page}` : '';
    // console.log(pageSize, page);
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/list?pageSize=${pageSize}&page=${page}`,
      {
        method: 'GET',
        // cache: 'no-cache',
        next: { tags: [`getProducts-${page}`, `page-${page}`] },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }

    const data = (await res.json()) as CommonResponseType<
      PaginatedResponseType<ProductNameDataType[]>
    >;
    // console.log(data);
    return data.result;
  }
);

export const getDefaultThumbnailDataByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/thumbnail/default/${productUuid}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Thumbnail Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }

    const data =
      (await res.json()) as CommonResponseType<ProductThumbnailDataType>;

    return data.result;
  }
);

export const getLowestOptionDataByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/option/search?productUuid=${productUuid}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Product Option Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<ProductOptionType>;
    return data.result;
  }
);

// 상세 페이지
export const getProductNameDataByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/${productUuid}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Product Name Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<ProductNameDataType>;
    return data.result;
  }
);

export const getThumbnailDatasByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/thumbnail/list/${productUuid}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Thumbnail Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<
      ProductThumbnailDataType[]
    >;
    return data.result;
  }
);

export const getOptionDatasByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/option/list/${productUuid}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Option Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<ProductOptionType[]>;

    return data.result;
  }
);

export const getDescriptionDataByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/description/${productUuid}`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Description Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data =
      (await res.json()) as CommonResponseType<ProductDescriptionType>;

    return data.result;
  }
);
