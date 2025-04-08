'use client';
import ItemThumb from '@/components/ui/productItem/ItemThumb';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ItemPrice from './ItemPrice';
import ItemName from './ItemName';

import { useEffect, useState } from 'react';
import {
  getProductOptionDatasByProductUuid,
  getThumbnailDatasByProductUuid,
} from '@/actions/product-service';
import {
  ProductListDataType,
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';

export default function ProductlItem({
  productData,
  size,
}: {
  productData: ProductListDataType;
  size: number;
}) {
  const [productItem, setProductItem] = useState({
    productName: productData.name,
    productUuid: productData.productUuid,
    thumbnail: undefined as ProductThumbnailDataType | undefined,
    option: undefined as ProductOptionType | undefined,
  });

  useEffect(() => {
    const getProductInfo = async () => {
      const [thumbData, optionData] = await Promise.all([
        getThumbnailDatasByProductUuid(productData.productUuid),
        getProductOptionDatasByProductUuid(productData.productUuid),
      ]);

      setProductItem((prev) => ({
        ...prev,
        thumbnail: thumbData,
        option: optionData,
      }));
    };

    getProductInfo();
  }, [productData]);

  return (
    <li className="flex flex-col gap-3 mb-12" style={{ maxWidth: size }}>
      {productItem.thumbnail !== undefined && (
        <ItemThumb
          productUuid={productData.productUuid}
          thumbnail={productItem.thumbnail}
          size={size}
        />
      )}

      <div className="flex flex-col gap-2">
        {/* <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} /> */}
        <ItemName id={productData.productUuid} name={productData.name} />
      </div>

      {productItem.option !== undefined && (
        <ItemPrice
          price={productItem.option.price}
          salePrice={productItem.option.totalPrice}
          discountRate={productItem.option.discountRate}
        />
      )}
    </li>
  );
}
