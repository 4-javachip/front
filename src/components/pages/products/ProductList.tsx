import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import ProductlItem from '../../ui/productItem/ProductItem';
import { Suspense } from 'react';
import ProductItemSkeleton from '@/components/ui/skeletons/ProductItemSkeleton';

export default function ProductList({
  products,
}: {
  products: ProductNameDataType[];
}) {
  return (
    <section className="padded py-6 flex justify-center">
      <ul className="w-full grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Suspense
            fallback={<ProductItemSkeleton size={800} />}
            key={product.productUuid}
          >
            <ProductlItem productData={product} size={800} />
          </Suspense>
        ))}
      </ul>
    </section>
  );
}
