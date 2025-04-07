'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonButton from '../../ui/buttons/CommonButton';
import DaumPostcodeModal from './DaumPostcodeModal';
import { addShippingAddress } from '@/actions/shipping-address';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import AddressInput from '@/components/ui/inputs/AddressInput';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { shippingAddressSchema } from '@/schemas/shippingAddressSchema';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';
import ShippingNote from './ShippingNote';
import { CommonLayout } from '@/components/layouts/CommonLayout';

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
      <CommonLayout.SectionInnerPadding>
        <form className="mt-[1.25rem] mb-[10rem]" onSubmit={handleSubmit}>
          <section className="space-y-[1.25rem]">
            <AddressInput
              id="addressName"
              label="주소별칭"
              name="addressName"
              onChange={handleChange}
              value={values.addressName}
            />

            <AddressInput
              id="receiverName"
              label="받는 분 *"
              name="recipientName"
              value={values.recipientName}
              onChange={handleChange}
            />
            {errorMessages.recipientName && (
              <p className="text-red-500 text-xs">
                {errorMessages.recipientName}
              </p>
            )}
            <div className="flex justify-between items-center gap-5">
              <div className="relative w-full pt-4">
                <AddressInput
                  id="zipCode"
                  label="우편번호 *"
                  name="zipCode"
                  readOnly
                  value={values.zipCode}
                  onChange={handleChange}
                />
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center whitespace-nowrap w-22 h-9 px-4 text-sm text-green rounded-full border border-green"
              >
                주소검색
              </button>
            </div>

            <AddressInput
              id="baseAddress"
              label="기본 주소 *"
              readOnly
              value={values.baseAddress}
              onChange={handleChange}
            />
            {errorMessages.baseAddress && (
              <p className="text-red-500 text-xs">
                {errorMessages.baseAddress}
              </p>
            )}

            <AddressInput
              id="detailAddress"
              label="상세 주소 *"
              value={values.detailAddress}
              name="detailAddress"
              onChange={handleChange}
            />
            {errorMessages.detailAddress && (
              <p className="text-red-500 text-xs">
                {errorMessages.detailAddress}
              </p>
            )}
            <AddressInput
              id="phoneNumber"
              label="연락처1 *"
              value={values.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />
            {errorMessages.phoneNumber && (
              <p className="text-red-500 text-xs">
                {' '}
                {errorMessages.phoneNumber}
              </p>
            )}
            <AddressInput
              id="secondPhoneNumber"
              label="연락처2"
              name="secondPhoneNumber"
              value={values.secondPhoneNumber}
              onChange={handleChange}
            />
            <ShippingNote
              value={values.shippingNote}
              onChange={(value) =>
                setValues({ ...values, shippingNote: value })
              }
            />

            <div className="flex items-center gap-1.5 pb-10">
              <CustomCheckBox
                label="기본배송지로 지정하기"
                onChange={(e) =>
                  setValues({ ...values, defaulted: e.target.checked })
                }
                checked={values.defaulted}
              />
            </div>
          </section>
        </form>

        {isModalOpen && (
          <DaumPostcodeModal
            onClose={() => setIsModalOpen(false)}
            onComplete={handleAddressSelect}
          />
        )}
      </CommonLayout.SectionInnerPadding>
    </>
  );
}
