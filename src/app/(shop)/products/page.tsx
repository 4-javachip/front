import { getProductListData } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';

export default async function ProductListPage({
  searchParams,
}: {
  searchParams: Promise<{ cursor: number }>;
}) {
  const { cursor } = await searchParams;
  let productsData;
  if (cursor === undefined || '') {
    productsData = await getProductListData();
  } else {
    productsData = await getProductListData({ cursor });
  }
  // console.log(productsData);
  return (
    <main>
      <ProductSortMenu />
      <ProductList products={productsData} />
    </main>
  );
}
