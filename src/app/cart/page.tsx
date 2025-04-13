import { getDefaultShippingAddress } from '@/actions/shipping-address-service';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import { DefaultShippingAddressType } from '@/types/ShippingAddressDataType';

import React from 'react';

export default async function page() {
  const defaultedShippingAddress =
    (await getDefaultShippingAddress()) as DefaultShippingAddressType;

  return (
    <main>
      <CartShippingInfo defaultShippingAddress={defaultedShippingAddress} />
    </main>
  );
}
