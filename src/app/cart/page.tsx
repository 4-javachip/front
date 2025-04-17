import { getCartItemData } from '@/actions/cart-service';
import { getDefaultShippingAddress } from '@/actions/shipping-address-service';
import CartAllCheck from '@/components/pages/cart/CartAllCheck';
import CartEmpty from '@/components/pages/cart/CartEmpty';

import CartItemList from '@/components/pages/cart/CartItemList';
import CartPurchaseBar from '@/components/pages/cart/CartPurchaseBar';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import CartDeleteButtons from '@/components/ui/buttons/CartDeleteButton';
import { DefaultShippingAddressType } from '@/types/ShippingAddressDataType';

import React from 'react';

export default async function page() {
  const cartItemList = await getCartItemData();

  const defaultedShippingAddress =
    (await getDefaultShippingAddress()) as DefaultShippingAddressType;
  const allChecked = cartItemList.every((item) => item.checked);
  const cartItemLength = cartItemList.length;

  return (
    <main>
      <CartShippingInfo defaultShippingAddress={defaultedShippingAddress} />
      {cartItemLength === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <div className="flex items-center justify-between mb-4 pt-4">
            <CartAllCheck checked={allChecked} />
            <CartDeleteButtons
              selectedCartUuids={cartItemList
                .filter((item) => item.checked)
                .map((item) => item.cartUuid)}
            />
          </div>
          <CartItemList cartItemList={cartItemList} checked={allChecked} />
        </>
      )}
    </main>
  );
}
