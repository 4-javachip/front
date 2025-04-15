'use server';
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

export async function getProductListData(params: getProductDataType) {
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
      // cache: 'no-cache',
      // next: { tags: ['getProducts', 'changePage'] },
    }
  );
  console.log(res);

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  const data = (await res.json()) as CommonResponseType<
    PaginatedResponseType<ProductNameDataType[]>
  >;
  console.log(data);
  return data.result;
}

export async function getDefaultThumbnailDataByProductUuid(
  productUuid: string
): Promise<ProductThumbnailDataType> {
  'use server';
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/product/thumbnail/default/${productUuid}`,
    {
      method: 'GET',
      cache: 'force-cache',
    }
  );
  console.log(productUuid);
  // if (!res.ok) {
  //   const errorData = await res.json();
  //   console.error('Thumbnail Data Fetching failed:', errorData);
  //   throw new Error(errorData.message);
  // }

  const data =
    (await res.json()) as CommonResponseType<ProductThumbnailDataType>;

  return data.result;
}

export async function getLowestOptionDataByProductUuid(productUuid: string) {
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

// 상세 페이지
export async function getProductNameDataByProductUuid(productUuid: string) {
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

export async function getThumbnailDatasByProductUuid(productUuid: string) {
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

export async function getOptionDatasByProductUuid(productUuid: string) {
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

export async function getSelectableOptionListData(type: 'size' | 'color') {
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
  const data = (await res.json()) as CommonResponseType<SelectableOptionType[]>;

  return data.result;
}

export async function getDescriptionDataByProductUuid(productUuid: string) {
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
  const data = (await res.json()) as CommonResponseType<ProductDescriptionType>;

  return data.result;
}
