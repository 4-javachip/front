import {
  getShippingAddressDatabyUuid,
  getShippingAddressList,
} from '@/actions/shipping-address-service';
import ShippingAddressList from '@/components/pages/ShippingAddress/ShippingAddressList';

import React from 'react';

export default async function page() {
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
      <ShippingAddressList address={fullData} />
    </>
  );
}
