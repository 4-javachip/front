'use client';

import React, { useState } from 'react';
import DaumPostcodeModal from './DaumPostcodeModal';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';
import ShippingAddressForm from './ShippingAddressForm';

export default function AddShippingAddress({
  action,
}: {
  action: (addressForm: FormData) => Promise<void>;
}) {
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
