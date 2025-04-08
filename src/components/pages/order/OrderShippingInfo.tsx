'use client';

import { dummyAddresses } from '@/data/dummyDatas';
import Link from 'next/link';
import OrderAddressEmptySection from './OrderAddressEmptySection';
import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function OrderShippingInfo() {
  const defaultAddress = dummyAddresses.find((addr) => addr.defaulted);

  return (
    <main className="flex flex-col justify-between w-full bg-background border-lightGray-6 text-sm pt-6">
      <ul className="w-full flex justify-between items-start">
        <li>
          <h2 className="w-full text-left text-lg font-pretendard font-semibold text-foreground mb-4">
            배송정보
          </h2>
        </li>
        <li>
          <Link
            href="/address"
            className="flex justify-center items-center border font-pretendard border-lightGray-4 text-foreground px-4 py-1 rounded-full text-sm"
          >
            변경
          </Link>
        </li>
      </ul>
      {defaultAddress ? (
        <address className="flex justify-between items-start">
          <ul className="not-italic text-foreground font-pretendard">
            <li className="font-normal  mb-1">
              {defaultAddress.recipientName} ({defaultAddress.addressName})
            </li>
            <li>
              ({defaultAddress.zipCode}) {defaultAddress.baseAddress}
              {defaultAddress.detailAddress &&
                ` ${defaultAddress.detailAddress}`}
            </li>
            <li className="font-medium pt-2">{defaultAddress.phoneNumber}</li>
          </ul>
        </address>
      ) : (
        <OrderAddressEmptySection />
      )}
      <CommonLayout.CommonBorder />
    </main>
  );
}
