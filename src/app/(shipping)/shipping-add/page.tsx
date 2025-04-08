import { addShippingAddress } from '@/actions/shipping-address-service';
import AddShippingAddress from '@/components/pages/ShippingAddress/AddShippingAddress';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import React from 'react';

export default async function page() {
  const handleAddAddress = async (addressForm: FormData) => {
    'use server';
    console.log('서버에서 처리:', addressForm);
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

    console.log('폼데이터:', payload);
    await addShippingAddress(payload);
  };
  return (
    <main>
      <TextTitleH1 className="mb-4">배송지 추가</TextTitleH1>
      <AddShippingAddress action={handleAddAddress} />
    </main>
  );
}
