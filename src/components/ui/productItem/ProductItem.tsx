'use client';

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
import { useEffect, useState } from 'react';
import ProductItemSkeleton from '../skeletons/ProductItemSkeleton';

export default function ProductlItem({
  productData,
  size,
}: {
  productData: ProductNameDataType;
  size: number;
}) {
  const [thumbnail, setThumbnail] = useState<ProductThumbnailDataType>();
  const [option, setOption] = useState<ProductOptionType>();

  useEffect(() => {
    const fetchData = async () => {
      const [thumbData, optionData] = await Promise.all([
        getDefaultThumbnailDataByProductUuid(productData.productUuid),
        getLowestOptionDataByProductUuid(productData.productUuid),
      ]);
      setThumbnail(thumbData);
      setOption(optionData);
    };

    fetchData();
  }, [productData.productUuid]);

  return (
    <li className="flex flex-col gap-3 mb-12" style={{ maxWidth: size }}>
      {thumbnail ? (
        <ItemThumb
          productUuid={productData.productUuid}
          thumbnail={thumbnail}
          size={size}
        />
      ) : (
        <div
          className="relative bg-lightGray-5 rounded-sm animate-pulse"
          style={
            size === 140
              ? { width: size, height: size }
              : { width: '100%', aspectRatio: '1 / 1' }
          }
        />
      )}

      <div className="flex flex-col gap-2">
        {productData.best || productData.new ? (
          <ProductLabelIcon isBest={productData.best} isNew={productData.new} />
        ) : (
          <div className="h-6 bg-lightGray-5 rounded-sm animate-pulse w-16" />
        )}

        {productData.name ? (
          <ItemName id={productData.productUuid} name={productData.name} />
        ) : (
          <div className="h-6 bg-lightGray-5 rounded-sm animate-pulse w-2/3" />
        )}
      </div>

      {option ? (
        <ItemPrice
          price={option.price}
          salePrice={option.totalPrice}
          discountRate={option.discountRate}
        />
      ) : (
        <div className="relative flex flex-col gap-1">
          <div className="h-6 bg-lightGray-5 rounded-sm w-1/3 animate-pulse" />
          <div className="h-6 bg-lightGray-5 rounded-sm w-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 h-6 w-10 bg-lightGray-5 rounded-sm animate-pulse" />
        </div>
      )}
    </li>
  );
}
