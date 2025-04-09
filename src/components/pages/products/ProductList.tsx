import {
  PaginatedResponseType,
  ProductNameDataType,
} from '@/types/ProductResponseDataTypes';
import ProductlItem from '../../ui/productItem/ProductItem';
import { Suspense } from 'react';
import ProductItemSkeleton from '@/components/ui/skeletons/ProductItemSkeleton';
import ScrollObserver from '@/components/ui/productItem/ProductScrollObserver';

export default function ProductList({
  products,
  cursor = 1,
}: {
  products: PaginatedResponseType<ProductNameDataType[]>;
  cursor?: number;
}) {
  const data = products.content;
  const nextCursor = products.nextCursor;
  const hasNext = products.hasNext;
  return (
    <section className="padded py-6 flex justify-center">
      <ul className="w-full grid grid-cols-2 gap-4">
        {data.map((product) => (
          <Suspense
            fallback={<ProductItemSkeleton size={800} />}
            key={product.productUuid}
          >
            <ProductlItem productData={product} size={800} />
          </Suspense>
        ))}
        {hasNext && <ScrollObserver cursor={nextCursor} />}
      </ul>
    </section>
  );
}
