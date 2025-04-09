'use client';

import React, { useState } from 'react';
import DaumPostcodeModal from './DaumPostcodeModal';
import ShippingAddressForm from './ShippingAddressForm';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';

export default function UpdateShippingAddress({
  initialData,
  action,
}: {
  initialData: ShippingAddressDataType;
  action: (addressForm: FormData) => Promise<void>;
}) {
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

  return (
    <>
      <ShippingAddressForm
        values={values}
        setValues={setValues}
        errorMessages={errorMessages}
        setErrorMessages={setErrorMessages}
        setIsModalOpen={setIsModalOpen}
        action={action}
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
