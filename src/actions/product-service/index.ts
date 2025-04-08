import {
  ProductListDataType,
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';
import { commonResponseType } from '@/types/ResponseDataTypes';

export async function getProducts() {
  //   {
  //   page,
  //   pageSize = '20',
  // }: {
  //   page: string;
  //   pageSize?: string;
  // }
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/product/list`, {
    // next: { tags: ['getProducts', 'changePage'] },
    cache: 'no-cache',
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  const data = (await res.json()) as commonResponseType<ProductListDataType[]>;
  console.log(data);
  return data.result;
}

export async function getThumbnailDatasByProductUuid(productUuid: string) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/product/thumbnail/default/${productUuid}`,
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

  const data =
    (await res.json()) as commonResponseType<ProductThumbnailDataType>;

  return data.result;
}

export async function getProductOptionDatasByProductUuid(productUuid: string) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/product/option/search?productUuid=${productUuid}`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    const errorData = await res.json();
    console.error('Product Option Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }
  const data = (await res.json()) as commonResponseType<ProductOptionType>;
  return data.result;
}
