import {
  getShippingAddressDatabyUuid,
  updateShippingAddress,
} from '@/actions/shipping-address-service';
import UpdateShippingAddress from '@/components/pages/ShippingAddress/UpdateShippingAddress';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { redirect } from 'next/navigation';

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
      shippingAddressUuid: shippingAddressUuid,
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

    await updateShippingAddress(payload as ShippingAddressDataType);
    console.log('수정:', payload);
    redirect('/shipping-addresses');
  };
  return (
    <>
      <TextTitleH1>배송 정보</TextTitleH1>
      <UpdateShippingAddress initialData={detail} action={action} />
    </>
  );
}
