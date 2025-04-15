'use client';
import {
  getThumbnailDatasByProductUuid,
  getOptionDatasByProductUuid,
  getProductNameDataByProductUuid,
  getProductOptionDataByProductOptionUuid,
  getDefaultThumbnailDataByProductUuid,
} from '@/actions/product-service';
import {
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';

import {
  ItemPriceSkeleton,
  ItemThumbSkeleton,
} from '../skeletons/ProductItemSkeleton';

import CartPrice from './CartPrice';
import CartThumbnail from './CartThumbnail';
import CartItemName from './CartItemName';
import { CommonLayout } from '@/components/layouts/CommonLayout';
// import DeleteButton from '../buttons/DeleteButton';
import DeleteIcon from '../icons/DeleteIcon';
import { Check } from 'lucide-react';
import Checkbox from '../inputs/CheckBox';
import { Suspense, useEffect, useState } from 'react';
import { CartItemType } from '@/types/CartDataType';
import { getCartItemData } from '@/actions/cart-service';
import { Thumb } from '@radix-ui/react-switch';
import QuantityControl from '@/components/pages/cart/QuantityControl';

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
    optionDiscount: 0,
    isChecked: true,
  });
  useEffect(() => {
    if (!data) return;
    const getCartItemData = async () => {
      const [product, options] = await Promise.all([
        getProductNameDataByProductUuid(data.productUuid),
        getProductOptionDataByProductOptionUuid(data.productOptionUuid),
      ]);
      console.log('product', data.productQuantity);
      setCartItem((prev) => ({
        ...prev,
        productUuid: data.productUuid,
        productName: product.name,
        productPrice: options.price,
        productSalePrice: options.totalPrice,
        cartUuid: data.cartUuid,
        quantity: data.productQuantity,
        optionUuid: data.productOptionUuid,
        optionSizeId: options.sizeOptionId,
        optionColorId: options.colorOptionId,
        optionDiscount: options.discountRate,
        isChecked: data.checked,
      }));
    };
    getCartItemData();
    return;
  }, [data]);

  // try {
  //   thumbnails = await getThumbnailDatasByProductUuid(cartItem.productUuid);
  //   options = await getOptionDatasByProductUuid(cartItem.productUuid);
  // } catch (error) {
  //   console.log('데이터 페칭 에러');
  // }
  // const option = options[0];
  // const thumbnail = thumbnails[0];
  return (
    <CommonLayout.SectionInnerPadding>
      <article className="grid grid-cols-12 items-start gap-4 py-6 border-b border-lightGray-8">
        <Checkbox checked={cartItem.isChecked} className="col-span-1" />
        <div className="shrink-0 col-span-3">
          <Suspense fallback={<ItemThumbSkeleton size={80} />}>
            <CartThumbnail
              productUuid={cartItem && cartItem.productUuid}
              size={80}
            />
          </Suspense>
        </div>

        <div className="col-span-8 space-y-7">
          <div className="text-base font-semibold text-foreground break-words">
            <CartItemName
              id={cartItem.productUuid}
              name={cartItem.productName}
            />
          </div>
          {/* <DeleteButton
              cartUuid={cartItem.cartUuid}
              onClick={() => {
                console.log('삭제 버튼 클릭됨');
              }}
            /> */}
          {/* <DeleteIcon /> */}
          <div className="flex items-end justify-between mt-2">
            <QuantityControl
              cartUuid={cartItem.cartUuid}
              quantity={cartItem.quantity}
            />
            <CartPrice
              price={cartItem.productPrice}
              salePrice={cartItem.productSalePrice}
              discountRate={cartItem.optionDiscount}
            />
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
