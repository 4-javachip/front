'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DaumPostcodeModal from './DaumPostcodeModal';
import { updateShippingAddress } from '@/actions/shipping-address-service';
import ShippingAddressForm from './ShippingAddressForm';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';

export default function UpdateShippingAddress({
  initialData,
}: {
  initialData: ShippingAddressDataType;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState(initialData);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('수정 ', values);
    try {
      await updateShippingAddress({
        ...values,
        shippingAddressUuid: initialData.shippingAddressUuid,
      });
      alert('배송지 수정 완료!');
      router.push('/shipping-addresses');
    } catch (error) {
      console.error(error);
      alert('배송지 수정 실패');
    }
  };

  return (
    <>
      <ShippingAddressForm
        values={values}
        setValues={setValues}
        errorMessages={errorMessages}
        setErrorMessages={setErrorMessages}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={handleSubmit}
        isEdit={true}
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
