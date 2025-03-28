import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';
import { dummyProducts } from '@/data/dummyDatas';

export default function ProductListPage() {
  return (
    <main>
      <ProductSortMenu />
      <ProductList products={dummyProducts} />
    </main>
  );
}
