'use client';

import React, { useEffect, useState } from 'react';
import DaumPostcodeModal from './DaumPostcodeModal';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressErrorType } from '@/types/ErrorDataType';
import ShippingAddressForm from './ShippingAddressForm';
import { getShippingAddressList } from '@/actions/shipping-address-service';
import Loader from '@/components/ui/loader';

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

  const [hideDefaultCheckbox, setHideDefaultCheckbox] = useState(false);
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setisloading(true);
        const response = await getShippingAddressList();
        if (response.length === 0) {
          setHideDefaultCheckbox(true);
        } else {
          setHideDefaultCheckbox(false);
        }
      } catch (error) {
        console.error('주소 목록 불러오기 실패', error);
      }
      setisloading(false);
    };

    fetchAddresses();
  }, []);

  const handleAddressSelect = (data: { zonecode: string; address: string }) => {
    setValues((prev) => ({
      ...prev,
      zipCode: data.zonecode,
      baseAddress: data.address,
    }));
  };

  return (
    <>
      {isloading ? (
        <div className="flex justify-center items-center ">
          <Loader size="10" />
        </div>
      ) : (
        <>
          {' '}
          <ShippingAddressForm
            values={values}
            setValues={setValues}
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            setIsModalOpen={setIsModalOpen}
            action={action}
            isEdit={false}
            hideDefaultCheckbox={hideDefaultCheckbox}
          />
          {isModalOpen && (
            <DaumPostcodeModal
              onClose={() => setIsModalOpen(false)}
              onComplete={handleAddressSelect}
            />
          )}
        </>
      )}
    </>
  );
}
