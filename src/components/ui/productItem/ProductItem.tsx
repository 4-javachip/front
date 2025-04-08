import ItemThumb from '@/components/ui/productItem/ItemThumb';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ItemPrice from './ItemPrice';
import ItemName from './ItemName';

import {
  getLowestOptionDataByProductUuid,
  getDefaultThumbnailDataByProductUuid,
} from '@/actions/product-service';
import {
  ProductNameDataType,
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';

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
  // const [productItem, setProductItem] = useState({
  //   productName: productData.name,
  //   productUuid: productData.productUuid,
  //   thumbnail: undefined as ProductThumbnailDataType | undefined,
  //   option: undefined as ProductOptionType | undefined,
  // });

  // useEffect(() => {
  //   const getProductInfo = async () => {
  //     const [thumbData, optionData] = await Promise.all([
  //       getThumbnailDatasByProductUuid(productData.productUuid),
  //       getProductOptionDatasByProductUuid(productData.productUuid),
  //     ]);

  //     setProductItem((prev) => ({
  //       ...prev,
  //       thumbnail: thumbData,
  //       option: optionData,
  //     }));
  //   };

  //   getProductInfo();
  // }, [productData]);

  return (
    <li className="flex flex-col gap-3 mb-12" style={{ maxWidth: size }}>
      <ItemThumb
        productUuid={productData.productUuid}
        thumbnail={thumbnail}
        size={size}
      />
      <div className="flex flex-col gap-2">
        {/* <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} /> */}
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
