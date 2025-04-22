'use server';
import { cache } from 'react';
import 'server-only';

import {
  PaginatedResponseType,
  ProductDescriptionType,
  ProductNameDataType,
  ProductOptionType,
  ProductThumbnailDataType,
  SelectableOptionType,
} from '@/types/ProductResponseDataTypes';
import { getProductDataType } from '@/types/RequestDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';

export const getProductListData = cache(async (params: getProductDataType) => {
  try {
    const queryString = params
      ? Object.entries(params)
          .reduce((acc, [key, value]) => {
            if (value !== undefined) acc.append(key, String(value));
            return acc;
          }, new URLSearchParams())
          .toString()
      : '';

    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/list?${queryString}`,
      {
        method: 'GET',
        cache: 'no-cache',
        // next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      // throw new Error(errorData.message);
      return {
        success: false,
        data: undefined,
      };
    }
    const data = (await res.json()) as CommonResponseType<
      PaginatedResponseType<ProductNameDataType[]>
    >;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
});

export const getDefaultThumbnailDataByProductUuid = cache(
  async (productUuid: string) => {
    try {
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
        // throw new Error(errorData.message);
        return {
          success: false,
          data: undefined,
        };
      }

      const data =
        (await res.json()) as CommonResponseType<ProductThumbnailDataType>;
      return {
        success: true,
        data: data.result,
      };
    } catch (error) {
      return {
        success: false,
        data: undefined,
      };
    }
  }
);

export const getLowestOptionDataByProductUuid = cache(
  async (productUuid: string) => {
    try {
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
        // throw new Error(errorData.message);
        return {
          success: false,
          data: undefined,
        };
      }
      const data = (await res.json()) as CommonResponseType<ProductOptionType>;
      return {
        success: true,
        data: data.result,
      };
    } catch (error) {
      return {
        success: false,
        data: undefined,
      };
    }
  }
);

// 상세 페이지
export const getProductNameDataByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/${productUuid}`,
      {
        method: 'GET',
        cache: 'no-cache',
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
        cache: 'no-cache',
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

export const getSelectableOptionListData = cache(
  async (type: 'size' | 'color') => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/option/${type}/list`,
      {
        method: 'GET',
        cache: 'force-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error(`${type} Data Fetching failed:`, errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<
      SelectableOptionType[]
    >;

    return data.result;
  }
);

export const getDescriptionDataByProductUuid = cache(
  async (productUuid: string) => {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/product/description/${productUuid}`,
      {
        method: 'GET',
        cache: 'no-cache',
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

export async function getProductOptionDataByProductOptionUuid(
  productOptionListUuid: string
) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/product/option/${productOptionListUuid}`,
    {
      method: 'GET',
      next: { tags: ['getProductOptionData'] },
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
