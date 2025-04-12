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
import React, { useEffect, useState } from 'react';
import ProductItemSkeleton, {
  ItemPriceSkeleton,
  ItemThumbSkeleton,
} from '../skeletons/ProductItemSkeleton';

function ProductlItem({
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
        <ItemThumbSkeleton size={size} />
      )}
      <div className="flex flex-col gap-2">
        {productData.best || productData.new || productData.name ? (
          <>
            <ProductLabelIcon
              isBest={productData.best}
              isNew={productData.new}
            />
            <ItemName id={productData.productUuid} name={productData.name} />
          </>
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
        <ItemPriceSkeleton />
      )}
    </li>
  );
}

export default React.memo(ProductlItem);
