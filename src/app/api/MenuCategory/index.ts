import { CategoryMenuType } from '@/types/ResponseDataTypes';

interface CategoryListResponse {
  isSuccess: boolean;
  message: string;
  code: number;
  result: CategoryMenuType[];
}

export async function getAllCategories(): Promise<CategoryMenuType[]> {
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/category/list`);

  if (!res.ok) {
    const error = await res.json();
    console.log('에러', error);
    throw new Error('카테고리 불러오기에 실패했습니다.');
  }

  const data: CategoryListResponse = await res.json();
  console.log(data);
  return data.result;
  //   console.log(process.env.BASE_API_URL);
}
