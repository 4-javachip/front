import { ProductItemType } from '@/types/ResponseDataTypes';
import ProductlItem from '../../ui/ProductItem';

export default function ProductList({
  products,
}: {
  products: ProductItemType[];
}) {
  return (
    <ul className="w-full grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductlItem key={product.id} {...product} size={800} />
      ))}
    </ul>
  );
}
