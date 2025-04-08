'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DaumPostcodeModal from './DaumPostcodeModal';
import { addShippingAddress } from '@/actions/shipping-address-service';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { shippingAddressSchema } from '@/schemas/shippingAddressSchema';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';
import ShippingAddressForm from './ShippingAddressForm';

export default function AddShippingAddress() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const res = shippingAddressSchema.safeParse({
      ...values,
      [name]: value,
    });
    if (!res.success) {
      const fieldErros: Partial<ShippingAddressErrorType> = {};
      res.error.errors.forEach((error) => {
        const fieldname = error.path[0] as keyof ShippingAddressErrorType;
        fieldErros[fieldname] = error.message;
      });
      setErrorMessages(fieldErros);
    } else {
      console.log('no error');
    }
  };

  const handleAddressSelect = (data: { zonecode: string; address: string }) => {
    setValues((prev) => ({
      ...prev,
      zipCode: data.zonecode,
      baseAddress: data.address,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('데이터:', values);

    try {
      await addShippingAddress(values);

      alert('배송지 등록이 완료되었습니다.');
      router.push('/mypage');
    } catch (error) {
      console.error(error);
      alert('배송지 등록에 실패했습니다.');
    }
  };

  return (
    <>
      <ShippingAddressForm
        values={values}
        setValues={setValues}
        errorMessages={errorMessages}
        setErrorMessages={setErrorMessages}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={handleSubmit}
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
