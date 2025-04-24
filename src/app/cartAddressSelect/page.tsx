import {
  getShippingAddressDatabyUuid,
  getShippingAddressList,
} from '@/actions/shipping-address-service';
import CartSelectAddressList from '@/components/ui/CartSelectAddressList/CartSelectAddressList';
import React from 'react';

export default async function addressSelectPage() {
  'use server';
  const list = await getShippingAddressList();
  const fullData = await Promise.all(
    list.map(async (item) => {
      const detail = await getShippingAddressDatabyUuid(
        item.shippingAddressUuid
      );
      return {
        address: detail,
        addressList: item,
      };
    })
  );

  return (
    <>
      <CartSelectAddressList address={fullData} />
    </>
  );
}
