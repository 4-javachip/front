import {
  getAllCategories,
  getCategoryByCategoryid,
} from '@/actions/category-service';
import BestProductList from '@/components/pages/best/BestProductList';
import ProductFilterList from '@/components/pages/products/ProductFilterList';
import { getProductDataType } from '@/types/RequestDataTypes';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const categoryData = await getAllCategories();
  const categoryItems = categoryData.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  const params = await searchParams;

  const selectedCategory = params.category
    ? await getCategoryByCategoryid(Number(params.category))
    : undefined;

  const productQueryParams: getProductDataType = {
    categoryId: params.category ? Number(params.category) : undefined,
    pageSize: 30,
  };

  // best는 무한스크롤 x
  //   const { data: bestProductDatas } = await getTop30BestProductDatas();
  //   if (bestProductDatas.length <= 0) return fallback;
  //   console.log(bestProductDatas);

  return (
    <main>
      <ProductFilterList
        categoryItems={categoryItems}
        selectedCategory={selectedCategory}
      />
      <BestProductList params={productQueryParams} />
    </main>
  );
}
