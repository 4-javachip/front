import { getShippingAddressDatabyUuid } from '@/actions/shipping-address-service';
import UpdateShippingAddress from '@/components/pages/ShippingAddress/UpdateShippingAddress';

import React from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ shippingAddressUuid: string }>;
}) {
  const { shippingAddressUuid } = await params;

  const detail = await getShippingAddressDatabyUuid(shippingAddressUuid);

  return (
    <>
      <h1 className="py-[1.25rem] text-[1.625rem] font-semibold font-pretendard px-6">
        배송지 정보
      </h1>
      <UpdateShippingAddress initialData={detail} />
    </>
  );
}
