import {
  getAllCategories,
  getCategoryByCategoryid,
} from '@/actions/category-service';
import { getProductListData } from '@/actions/product-service';
import ProductFilterList from '@/components/pages/products/ProductFilterList';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';
import { getProductDataType } from '@/types/RequestDataTypes';

export default async function ProductListPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const INITIAL_PAGE = 1;
  const PAGE_SIZE = 10;

  const categoryData = await getAllCategories();
  const categoryItems = categoryData.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  const params = await searchParams;
  const pageParam = Array.isArray(params.page) ? params.page[0] : params.page;
  const pageNumber = pageParam ? Number(pageParam) : INITIAL_PAGE;

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
    pageSize: params.pageSize ? Number(params.pageSize) : PAGE_SIZE,
    page: pageNumber,
  };

  const initialProducts = await getProductListData(productQueryParams);

  return (
    <main>
      <ProductFilterList
        categoryItems={categoryItems}
        selectedCategory={selectedCategory}
      />
      <ProductSortMenu />

      <ProductList
        initialProducts={initialProducts}
        params={productQueryParams}
      />
    </main>
  );
}
