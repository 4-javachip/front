import ItemThumb from '@/components/ui/productItem/ItemThumb';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ItemPrice from './ItemPrice';
import ItemName from './ItemName';
import {
  getLowestOptionDataByProductUuid,
  getDefaultThumbnailDataByProductUuid,
} from '@/actions/product-service';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';

export default async function ProductlItem({
  productData,
  size,
}: {
  productData: ProductNameDataType;
  size: number;
}) {
  const [thumbnail, option] = await Promise.all([
    getDefaultThumbnailDataByProductUuid(productData.productUuid),
    getLowestOptionDataByProductUuid(productData.productUuid),
  ]);

  return (
    <li className="flex flex-col gap-3 mb-12" style={{ maxWidth: size }}>
      <ItemThumb
        productUuid={productData.productUuid}
        thumbnail={thumbnail}
        size={size}
      />
      <div className="flex flex-col gap-2">
        <ProductLabelIcon isBest={productData.best} isNew={productData.new} />
        <ItemName id={productData.productUuid} name={productData.name} />
      </div>
      <ItemPrice
        price={option.price}
        salePrice={option.totalPrice}
        discountRate={option.discountRate}
      />
    </li>
  );
}
