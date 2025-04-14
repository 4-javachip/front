'use client';

import {
  getLowestOptionDataByProductUuid,
  getDefaultThumbnailDataByProductUuid,
} from '@/actions/product-service';
import {
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';
import React, { useEffect, useState } from 'react';
import {
  ItemPriceSkeleton,
  ItemThumbSkeleton,
} from '../skeletons/ProductItemSkeleton';

import CartPrice from './CartPrice';
import { CartItemListType, CartProductItemType } from '@/types/CartDataType';
import CartThumbnail from './CartThumbnail';
import CartItemName from './CartItemName';
import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function CartItem({
  cartItem,
  name,
  size,
}: {
  cartItem: CartItemListType;
  name: string;
  size: number;
}) {
  const [thumbnail, setThumbnail] = useState<ProductThumbnailDataType>();
  const [option, setOption] = useState<ProductOptionType>();

  useEffect(() => {
    if (!cartItem) return;
    const fetchData = async () => {
      try {
        const thumb = await getDefaultThumbnailDataByProductUuid(
          cartItem.productUuid
        );
        setThumbnail(thumb);
      } catch (e) {
        setThumbnail({
          id: -1,
          productUuid: cartItem.productUuid,
          thumbnailUrl: '/images/no-image-icon.jpg',
          description: 'no image',
          defaulted: false,
        });
      }

      try {
        const opt = await getLowestOptionDataByProductUuid(
          cartItem.productUuid
        );
        setOption(opt);
      } catch (e) {}
    };

    fetchData();
  }, [cartItem.productUuid]);

  return (
    <CommonLayout.SectionInnerPadding>
      <article className="flex items-start gap-4 py-6 border-b border-lightGray-8">
        <div className="shrink-0" style={{ width: size, height: size }}>
          {thumbnail ? (
            <CartThumbnail
              productUuid={cartItem.productUuid}
              thumbnail={thumbnail}
              size={size}
            />
          ) : (
            <ItemThumbSkeleton size={size} />
          )}
        </div>

        <div className="flex flex-col justify-between flex-1 h-full">
          <div className="text-base font-semibold text-foreground break-words">
            <CartItemName id={cartItem.productUuid} name={name} />
          </div>

          <div className="flex justify-end mt-4">
            {option ? (
              <CartPrice
                price={option.price}
                salePrice={option.totalPrice}
                discountRate={option.discountRate}
              />
            ) : (
              <ItemPriceSkeleton />
            )}
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
