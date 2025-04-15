import { getCartItemData } from '@/actions/cart-service';
import {
  getDefaultThumbnailDataByProductUuid,
  getOptionDatasByProductUuid,
  getProductNameDataByProductUuid,
} from '@/actions/product-service';
import { getDefaultShippingAddress } from '@/actions/shipping-address-service';

import CartItemList from '@/components/pages/cart/CartItemList';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import { DefaultShippingAddressType } from '@/types/ShippingAddressDataType';

import React from 'react';

export default async function page() {
  const cartItemList = await getCartItemData();

  // const cartItemdata = await Promise.all(
  //   cartItemList.map((item) =>
  //     getProductNameDataByProductUuid(item.productUuid),
  //   )
  // );

  // const cartItemData = await Promise.all(
  //   cartItemList.map(async (item) => {
  //     const [ItemName, ItemPrice, ItemThumb] = await Promise.all([
  //       getProductNameDataByProductUuid(item.productUuid),
  //       getOptionDatasByProductUuid(item.productUuid),
  //       getDefaultThumbnailDataByProductUuid(item.productUuid),
  //     ]);

  //     return {
  //       ...item,
  //       cartItemName: ItemName.name,
  //       option: ItemPrice,
  //       thumbnail: ItemThumb,
  //     };
  //   })
  // );

  const defaultedShippingAddress =
    (await getDefaultShippingAddress()) as DefaultShippingAddressType;

  return (
    <main>
      <CartShippingInfo defaultShippingAddress={defaultedShippingAddress} />
      <CartItemList cartItemList={cartItemList} />
    </main>
  );
}
