'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CommonLayout } from '@/components/layouts/CommonLayout';

import DefaultIcon from '@/components/ui/icons/DefaultIcon';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressListType } from '@/types/ResponseDataTypes';
import ConfirmNextButton from '../buttons/ConfirmNextButton.tsx';
import CustomRadio from '../inputs/CustomRadio';
import Link from 'next/link.js';

interface ShippingAddressItemProps {
  address: ShippingAddressDataType;
  addressList: ShippingAddressListType;
}

export default function CartSelectAddressList({
  address,
}: {
  address: ShippingAddressItemProps[];
}) {
  const router = useRouter();
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const sortedAddress = address.sort((a, b) => {
    if (a.addressList.defaulted && !b.addressList.defaulted) return -1;
    if (!a.addressList.defaulted && b.addressList.defaulted) return 1;
    return 0;
  });

  const handleConfirm = () => {
    if (!selectedUuid) {
      alert('배송지를 선택해주세요.');
      return;
    }

    router.push(`/order?selected=${selectedUuid}`);
  };

  return (
    <main className="w-full bg-background text-sm pt-2 ">
      <CommonLayout.SectionInnerPadding>
        <ul className="space-y-5">
          <nav className="flex justify-end font-body text-sm text-green ">
            <Link href={`/shipping-add?callbackUrl=/cartAddressSelect`}>
              + 새 배송지 추가
            </Link>
          </nav>
          {sortedAddress.map(({ address, addressList }) => (
            <li key={addressList.shippingAddressUuid}>
              <div className="flex items-start gap-2">
                <CustomRadio
                  name="shippingAddress"
                  value={addressList.shippingAddressUuid}
                  checked={selectedUuid === addressList.shippingAddressUuid}
                  onChange={() =>
                    setSelectedUuid(addressList.shippingAddressUuid)
                  }
                />

                <div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 ">
                      <strong className="flex items-center text-base font-semibold text-lightGray-12 leading-7">
                        {address.addressName} ({address.recipientName})
                      </strong>
                      {addressList.defaulted && <DefaultIcon />}
                    </div>
                    <div className="flex justify-end">
                      <nav className=" font-body text-xs text-lightGray-7 ">
                        <Link
                          href={`/shipping-addresses/${addressList.shippingAddressUuid}`}
                        >
                          수정
                        </Link>
                      </nav>
                    </div>
                  </div>

                  <div>
                    <address className="not-italic font-light text-sm text-foreground leading-5">
                      ({address.zipCode}) {address.baseAddress}
                      <br />
                      {address.detailAddress}
                    </address>
                    <ul className="flex items-center gap-2 font-pretendard text-xs text-lightGray-7 leading-7">
                      <li>{address.phoneNumber}</li>
                      <li className="border-l-2 pl-2 leading-3">
                        {address.secondPhoneNumber}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CommonLayout.SectionInnerPadding>

      <ConfirmNextButton
        className="font-semibold"
        isEnabled={() => !!selectedUuid}
        onClick={handleConfirm}
      >
        선택한 주소로 배송지 설정
      </ConfirmNextButton>
    </main>
  );
}
