import {
  getAllCategories,
  getCategoryByCategoryid,
} from '@/actions/category-service';
import { getProductListData } from '@/actions/product-service';
import ProductFilterList from '@/components/pages/products/ProductFilterList';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';
import ProductItemSkeleton from '@/components/ui/skeletons/ProductItemSkeleton';
import { Suspense } from 'react';

export default async function ProductListPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const categoryData = await getAllCategories();
  const categoryItems = categoryData.map((category) => ({
    id: category.id,
    name: category.name,
  }));
  const { category } = await searchParams;
  // const { page } = await searchParams;
  // console.log(page);
  // const pageSize = 8;

  const selectedCategory = category
    ? await getCategoryByCategoryid(Number(category))
    : undefined;

  return (
    <main>
      <Suspense fallback={<div></div>}>
        <ProductFilterList
          categoryItems={categoryItems}
          selectedCategory={selectedCategory}
        />
      </Suspense>
      <ProductSortMenu />
      {/* <Suspense
        fallback={Array.from({ length: pageSize }).map((_, index) => (
          <ProductItemSkeleton size={800} key={index} />
        ))}
      > */}
      <ProductList />
      {/* </Suspense> */}
    </main>
  );
}
