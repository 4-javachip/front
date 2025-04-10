import { getProductListData } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';

export default async function ProductListPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const pageSize = 4;
  const productsData = await getProductListData({
    pageSize: Number(pageSize),
    page: Number(page) || 1,
  });

  return (
    <main>
      <ProductSortMenu />
      <ProductList initialProducts={productsData} />
    </main>
  );
}
