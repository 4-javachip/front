import { getCartItemData } from '@/actions/cart-service';
import { getDefaultShippingAddress } from '@/actions/shipping-address-service';

import CartItemList from '@/components/pages/cart/CartItemList';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import { DefaultShippingAddressType } from '@/types/ShippingAddressDataType';

import React from 'react';

export default async function page() {
  const cartItemList = await getCartItemData();

  const defaultedShippingAddress =
    (await getDefaultShippingAddress()) as DefaultShippingAddressType;

  return (
    <main>
      <CartShippingInfo defaultShippingAddress={defaultedShippingAddress} />
      <CartItemList cartItemList={cartItemList} />
    </main>
  );
}
