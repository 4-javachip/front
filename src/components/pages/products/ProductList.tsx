import { ProductItemType } from '@/types/ResponseDataTypes';
import ProductListItem from './ProductListItem';

export default function ProductList({
  products,
}: {
  products: ProductItemType[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductListItem key={product.id} {...product} size={300} />
      ))}
    </div>
  );
}
