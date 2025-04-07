// export async function getProducts({
//   page,
//   pageSize = '20',
// }: {
//   page: string;
//   pageSize?: string;
// }) {
//   const res = await fetch(
//     `${process.env.BASE_API_URL}/api/v1/products?page=${page}&pageSize=${pageSize}`,
//     {
//       next: { tags: ['getProducts', 'changePage'] },
//     }
//   );
'use server';
import {
  commonResponseType,
  ProductListDataType,
  ProductThumbnailDataType,
} from '@/types/ResponseDataTypes';

//   // const res = await fetch('http://localhost:8080/api/v1/products')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

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
    `${process.env.BASE_API_URL}/api/v1/product/thumbnail/list/${productUuid}`,
    {
      // next: { tags: ['getProducts', 'changePage'] },
      cache: 'no-cache',
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  const data = (await res.json()) as commonResponseType<
    ProductThumbnailDataType[]
  >;

  return data.result;
}
