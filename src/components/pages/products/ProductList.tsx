import { ProductListDataType } from '@/types/ResponseDataTypes';
import ProductlItem from '../../ui/ProductItem';
import { Suspense } from 'react';

export default function ProductList({
  products,
}: {
  products: ProductListDataType[];
}) {
  return (
    <section className="padded py-6 flex justify-center">
      <ul className="w-full grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Suspense fallback={<></>} key={product.productUuid}>
            <ProductlItem productData={product} size={800} />
          </Suspense>
        ))}
      </ul>
    </section>
  );
}
