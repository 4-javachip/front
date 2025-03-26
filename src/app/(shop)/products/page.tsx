import ProductList from '@/components/pages/products/ProductList';
import { dummyProducts } from '@/data/dummyDatas';

export default function ProductListPage() {
  return (
    <main>
      <section className="p-6 flex justify-center">
        <ProductList products={dummyProducts} />
      </section>
    </main>
  );
}
