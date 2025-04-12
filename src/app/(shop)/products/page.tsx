import {
  getAllCategories,
  getCategoryByCategoryid,
} from '@/actions/category-service';
import ProductFilterList from '@/components/pages/products/ProductFilterList';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';
import ProductItemSkeleton from '@/components/ui/skeletons/ProductItemSkeleton';
import { getProductDataType } from '@/types/RequestDataTypes';
import { Suspense } from 'react';

export default async function ProductListPage({
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
    subCategoryId: params.subCategory ? Number(params.subCategory) : undefined,
    seasonId: params.season ? Number(params.season) : undefined,
    sortType: params.sortType as
      | 'PRICE_ASC'
      | 'PRICE_DESC'
      | 'RECOMMEND'
      | undefined,
    keyword: params.keyword ?? undefined,
    cursor: params.cursor ? Number(params.cursor) : undefined,
    pageSize: params.pageSize ? Number(params.pageSize) : undefined,
    page: params.page ? Number(params.page) : undefined,
  };

  return (
    <main>
      <ProductFilterList
        categoryItems={categoryItems}
        selectedCategory={selectedCategory}
      />
      <ProductSortMenu />
      {/* <Suspense
        fallback={Array.from({ length: 20 }).map((_, index) => (
          <ProductItemSkeleton size={800} key={index} />
        ))}
      > */}
      <ProductList params={productQueryParams} />
      {/* </Suspense> */}
    </main>
  );
}
