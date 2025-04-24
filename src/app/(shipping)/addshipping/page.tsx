import { getUserShippingAddressAgreement } from '@/actions/agreement-service';
import { addShippingAddress } from '@/actions/shipping-address-service';
import AddShippingAddress from '@/components/pages/ShippingAddress/AddShippingAddress';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const useragreementData = await getUserShippingAddressAgreement();
  const usershippingagreement = useragreementData?.[0] ?? {
    agreementId: 2,
    agreed: false,
  };
  const callbackUrl = (await searchParams).callbackUrl;
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
    } as ShippingAddressDataType;

    const agreementPayload = {
      agreementId: usershippingagreement.agreementId,
      agreed:
        addressForm.get('shippingaddressagreechecked') === 'on' ? true : null,
    };

    await addShippingAddress(payload, agreementPayload);
    return redirect(callbackUrl ?? '/shippingaddresses');
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
