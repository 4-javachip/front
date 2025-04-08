import {
  getShippingAddressDatabyUuid,
  getShippingAddressList,
} from '@/actions/shipping-address-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import ShippingAddressList from '@/components/pages/ShippingAddress/ShippingAddressList';

import React from 'react';

export default async function page() {
  const list = await getShippingAddressList(); // ShippingAddressListType[]
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
    <CommonLayout.SectionInnerPadding>
      <ShippingAddressList address={fullData} />
    </CommonLayout.SectionInnerPadding>
  );
}
