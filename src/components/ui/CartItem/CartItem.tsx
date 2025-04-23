'use client';
import {
  getColorNameDataByColorId,
  getProductNameDataByProductUuid,
  getProductOptionDataByProductOptionUuid,
  getSizeNameDataBySizeId,
} from '@/actions/product-service';

import { ItemThumbSkeleton } from '../skeletons/ProductItemSkeleton';

import CartPrice from './CartPrice';
import CartThumbnail from './CartThumbnail';
import ItemName from './ItemName';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import Checkbox from '../inputs/CheckBox';
import { Suspense, useEffect, useState } from 'react';
import { CartItemType } from '@/types/CartDataType';
import QuantityControl from '@/components/pages/cart/QuantityControl';
import DeleteButton from '../buttons/DeleteButton';

export default function CartItem({
  data,
  size,
}: {
  data: CartItemType;
  size: number;
}) {
  const [cartItem, setCartItem] = useState({
    productUuid: '',
    productName: '',
    productPrice: 0,
    productSalePrice: 0,
    cartUuid: '',
    quantity: 0,
    optionUuid: '',
    optionSizeId: 0,
    optionColorId: 0,
    optionSizeName: '',
    optionColorName: '',
    optionDiscount: 0,
    isChecked: data.checked,
  });
  useEffect(() => {
    if (!data) return;

    const getCartItemData = async () => {
      try {
        const [product, options] = await Promise.all([
          getProductNameDataByProductUuid(data.productUuid),
          getProductOptionDataByProductOptionUuid(data.productOptionUuid),
        ]);

        const [colorNameData, sizeNameData] = await Promise.all([
          options.colorOptionId
            ? getColorNameDataByColorId(options.colorOptionId)
            : null,
          options.sizeOptionId
            ? getSizeNameDataBySizeId(options.sizeOptionId)
            : null,
        ]);

        setCartItem({
          productUuid: data.productUuid,
          productName: product.name,
          productPrice: options.price,
          productSalePrice: options.totalPrice,
          cartUuid: data.cartUuid,
          quantity: data.productQuantity,
          optionUuid: data.productOptionUuid,
          optionSizeId: options.sizeOptionId ?? 0,
          optionColorId: options.colorOptionId ?? 0,
          optionSizeName: sizeNameData?.name ?? '',
          optionColorName: colorNameData?.name ?? '',
          optionDiscount: options.discountRate,
          isChecked: data.checked,
        });
      } catch (err) {
        console.error('장바구니 항목 패칭 오류:', err);
      }
    };

    getCartItemData();
  }, [data]);
  console.log('cartItem', cartItem);
  return (
    <CommonLayout.SectionInnerPadding>
      <article className="grid grid-cols-12 items-start gap-2 py-6 border-b border-lightGray-8">
        <Checkbox
          checked={cartItem.isChecked}
          cartUuid={cartItem.cartUuid}
          className="col-span-1"
        />
        <div className="shrink-0 col-span-4">
          <Suspense fallback={<ItemThumbSkeleton size={size} />}>
            <CartThumbnail
              productUuid={cartItem && cartItem.productUuid}
              size={140}
            />
          </Suspense>
        </div>

        <div className="col-span-7 space-y-2">
          <div className="flex justify-between text-base font-semibold text-foreground ">
            <ItemName id={cartItem.productUuid} name={cartItem.productName} />
            <DeleteButton cartUuid={cartItem.cartUuid} />
          </div>
          <ul className="flex items-center justify-start gap-2 font-pretendard text-xs">
            {cartItem.optionColorName && <li> {cartItem.optionColorName}</li>}
            {cartItem.optionSizeName && (
              <li className="border-l pl-2 leading-3">
                {cartItem.optionSizeName}
              </li>
            )}
          </ul>
          <div className="flex items-end justify-between mt-2">
            <QuantityControl
              cartUuid={cartItem.cartUuid}
              quantity={cartItem.quantity}
            />
            <CartPrice
              price={cartItem.productPrice}
              salePrice={cartItem.productSalePrice}
              discountRate={cartItem.optionDiscount}
              quantity={cartItem.quantity}
            />
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
