'use client';

import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';
import { shippingAddressSchema } from '@/schemas/shippingAddressSchema';
import AddressInput from '@/components/ui/inputs/AddressInput';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import ShippingNote from './ShippingNote';

interface Props {
  values: ShippingAddressDataType;
  errorMessages: Partial<ShippingAddressErrorType>;
  isModalOpen: boolean;
  setValues: (values: ShippingAddressDataType) => void;
  setErrorMessages: (errors: Partial<ShippingAddressErrorType>) => void;
  setIsModalOpen: (open: boolean) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ShippingAddressForm({
  values,
  errorMessages,
  isModalOpen,
  setValues,
  setErrorMessages,
  setIsModalOpen,
  onSubmit,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const res = shippingAddressSchema.safeParse({
      ...values,
      [name]: value,
    });

    if (!res.success) {
      const fieldErrors: Partial<ShippingAddressErrorType> = {};
      res.error.errors.forEach((error) => {
        const fieldname = error.path[0] as keyof ShippingAddressErrorType;
        fieldErrors[fieldname] = error.message;
      });
      setErrorMessages(fieldErrors);
    } else {
      setErrorMessages({});
    }
  };

  return (
    <form className="mt-[1.25rem] mb-[10rem]" onSubmit={onSubmit}>
      <section className="space-y-[1.25rem] px-6">
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
          <p className="text-red-500 text-xs">{errorMessages.recipientName}</p>
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
          <p className="text-red-500 text-xs">{errorMessages.baseAddress}</p>
        )}

        <AddressInput
          id="detailAddress"
          label="상세 주소 *"
          value={values.detailAddress}
          name="detailAddress"
          onChange={handleChange}
        />
        {errorMessages.detailAddress && (
          <p className="text-red-500 text-xs">{errorMessages.detailAddress}</p>
        )}

        <AddressInput
          id="phoneNumber"
          label="연락처1 *"
          value={values.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        {errorMessages.phoneNumber && (
          <p className="text-red-500 text-xs">{errorMessages.phoneNumber}</p>
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
          onChange={(value) => setValues({ ...values, shippingNote: value })}
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
  );
}
