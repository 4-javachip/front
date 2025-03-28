import ItemThumb from '@/components/ui/ItemThumb';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import { ProductItemType } from '@/types/ResponseDataTypes';
import ItemPrice from './ItemPrice';
import ItemName from './ItemName';

export default function ProductlItem({
  id,
  thumbnail,
  label,
  name,
  price,
  salePrice,
  discountRate,
  size = 140,
}: ProductItemType & { size?: number }) {
  return (
    <li className="flex flex-col gap-3 mb-12" style={{ maxWidth: size }}>
      <ItemThumb id={id} name={name} thumbnail={thumbnail} size={size} />

      <div className="flex flex-col gap-2">
        <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} />
        <ItemName id={id} name={name} />
      </div>

      <ItemPrice
        price={price}
        salePrice={salePrice}
        discountRate={discountRate}
      />
    </li>
  );
}
