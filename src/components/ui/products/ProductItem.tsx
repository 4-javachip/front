'use client';

import ItemThumb from './ItemThumb';
import ProductLabelIcon from '../icons/ProductLabelIcon';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [thumbRes, optRes] = await Promise.all([
        getDefaultThumbnailDataByProductUuid(productData.productUuid),
        getLowestOptionDataByProductUuid(productData.productUuid),
      ]);

      if (thumbRes.success && thumbRes.data) {
        setThumbnail(thumbRes.data);
      } else {
        setThumbnail({
          id: -1,
          productUuid: productData.productUuid,
          thumbnailUrl: '/images/no-image-icon.jpg',
          description: 'no image',
          defaulted: false,
        });
      }

      if (optRes.success && optRes.data) {
        setOption(optRes.data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [productData.productUuid]);

  if (isLoading) return <ProductItemSkeleton size={size} />;

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
