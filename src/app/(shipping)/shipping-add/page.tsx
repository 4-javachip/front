import {
  getShippingAddressAgreement,
  getUserShippingAddressAgreement,
} from '@/actions/agreement-service';
import { addShippingAddress } from '@/actions/shipping-address-service';
import AddShippingAddress from '@/components/pages/ShippingAddress/AddShippingAddress';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function page() {
  const useragreementData = await getUserShippingAddressAgreement();
  // const agreementData =await getShippingAddressAgreement();
  const usershippingagreement = useragreementData[0];
  // const usershippingagree = agreementData[0]?.agreed === true;
  const agreementId = useragreementData?.[0]?.agreementId;

  if (!agreementId) {
    throw new Error('agreementId가 없습니다. 백엔드 응답 또는 로직 확인 필요!');
  }
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
      defaulted: addressForm.get('defaulted') === 'on' ? true : false,
      // shippingaddressagreechecked:
      //   addressForm.get('shippingaddressagreechecked') === 'on' ? true : false,
    } as ShippingAddressDataType;

    const agreementPayload = {
      // agreementId: usershippingagreement.agreementId,
      // agreed: usershippingagreement?.agreed,
      agreementId: usershippingagreement.agreementId,
      agreed:
        addressForm.get('shippingaddressagreechecked') === 'on' ? true : null,
    };

    console.log('폼데이터:', payload);
    await addShippingAddress(payload, agreementPayload);

    redirect('/shipping-addresses');
  };

  return (
    <main>
      <TextTitleH1 className="mb-4">배송지 추가</TextTitleH1>
      <AddShippingAddress
        action={handleAddAddress}
        usershippingagree={usershippingagreement}
      />
    </main>
  );
}
