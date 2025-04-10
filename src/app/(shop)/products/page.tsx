import { getProductListData } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';
import ProductItemSkeleton from '@/components/ui/skeletons/ProductItemSkeleton';
import { Suspense } from 'react';

export default async function ProductListPage() {
  //   {
  //   searchParams,
  // }: {
  //   searchParams: Promise<{ page: string }>;
  // }
  // const { page } = await searchParams;
  // console.log(page);
  // const pageSize = 8;

  return (
    <main>
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
