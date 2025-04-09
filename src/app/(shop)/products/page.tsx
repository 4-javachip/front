import { getProductListData } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';

export default async function ProductListPage() {
  const productsData = await getProductListData();
  return (
    <main>
      <ProductSortMenu />
      <ProductList products={productsData.content} />
    </main>
  );
}
