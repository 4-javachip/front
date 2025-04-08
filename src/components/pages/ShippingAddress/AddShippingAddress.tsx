'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DaumPostcodeModal from './DaumPostcodeModal';
import { addShippingAddress } from '@/actions/shipping-address-service';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';
import ShippingAddressForm from './ShippingAddressForm';

export default function AddShippingAddress({
  action,
}: {
  action: (addressForm: FormData) => Promise<void>;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState<ShippingAddressDataType>({
    addressName: '',
    recipientName: '',
    zipCode: '',
    baseAddress: '',
    detailAddress: '',
    phoneNumber: '',
    secondPhoneNumber: '',
    shippingNote: '',
    defaulted: false,
  });

  const [errorMessages, setErrorMessages] = useState<
    Partial<ShippingAddressErrorType>
  >({});

  const handleAddressSelect = (data: { zonecode: string; address: string }) => {
    setValues((prev) => ({
      ...prev,
      zipCode: data.zonecode,
      baseAddress: data.address,
    }));
  };
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('데이터:', values);

  //   try {
  //     await addShippingAddress(values);

  //     alert('배송지 등록이 완료되었습니다.');
  //     router.push('/mypage');
  //   } catch (error) {
  //     console.error(error);
  //     alert('배송지 등록에 실패했습니다.');
  //   }
  // };

  return (
    <>
      <ShippingAddressForm
        values={values}
        setValues={setValues}
        errorMessages={errorMessages}
        setErrorMessages={setErrorMessages}
        // isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        action={action}
        isEdit={false}
      />

      {isModalOpen && (
        <DaumPostcodeModal
          onClose={() => setIsModalOpen(false)}
          onComplete={handleAddressSelect}
        />
      )}
    </>
  );
}
