import {
  getShippingAddressDatabyUuid,
  updateShippingAddress,
} from '@/actions/shipping-address-service';
import UpdateShippingAddress from '@/components/pages/ShippingAddress/UpdateShippingAddress';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { redirect } from 'next/navigation';

import React from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ shippingAddressUuid: string }>;
}) {
  const { shippingAddressUuid } = await params;

  const detail = await getShippingAddressDatabyUuid(shippingAddressUuid);
  const action = async (addressForm: FormData) => {
    'use server';
    const payload = {
      addressName: addressForm.get('addressName'),
      recipientName: addressForm.get('recipientName'),
      zipCode: addressForm.get('zipCode'),
      baseAddress: addressForm.get('baseAddress'),
      detailAddress: addressForm.get('detailAddress'),
      phoneNumber: addressForm.get('phoneNumber'),
      secondPhoneNumber: addressForm.get('secondPhoneNumber'),
      shippingNote:
        addressForm.get('shippingNote') === '직접입력'
          ? addressForm.get('customNote')
          : addressForm.get('shippingNote'),
      // defaulted: addressForm.get('defaulted') === 'on' ? true : false,
    } as ShippingAddressDataType;

    // if (addressForm.defaulted !== undefined) {
    //   formData.append('defaulted', addressForm.defaulted ? 'on' : 'off');
    // }

    if (shippingAddressUuid) {
      addressForm.append('shippingAddressUuid', shippingAddressUuid);
    }
    try {
      await updateShippingAddress(payload as ShippingAddressDataType);
      alert('배송지 수정 완료!');
      redirect('/shipping-addresses');
    } catch (error) {
      console.error(error);
      alert('배송지 수정 실패');
    }
  };
  return (
    <>
      <TextTitleH1>배송 정보</TextTitleH1>
      <UpdateShippingAddress initialData={detail} action={action} />
    </>
  );
}
