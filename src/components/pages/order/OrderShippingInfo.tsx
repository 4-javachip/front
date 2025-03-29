'use client';

import { dummyAddresses } from '@/data/dummyDatas';
import Link from 'next/link';
import OrderAddressEmptySection from './OrderAddressEmptySection';
import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function OrderShippingInfo() {
  const defaultAddress = dummyAddresses.find((addr) => addr.defaultAddress);

  return (
    <CommonLayout.SectionInnerPadding
      className="w-full bg-background border-lightGray-6 text-sm py-6"
      aria-label="배송정보"
    >
      {defaultAddress ? (
        <section className="flex justify-between items-start">
          <address className="not-italic text-black leading-snug">
            <p className="font-medium mb-1">
              {defaultAddress.recipientName} ({defaultAddress.addressName})
            </p>
            <p className="text-gray-600">
              ({defaultAddress.zipCode}) {defaultAddress.baseAddress}
              {defaultAddress.detailAddress &&
                ` ${defaultAddress.detailAddress}`}
            </p>
          </address>

          <Link
            href="/address"
            className="text-brown font-medium whitespace-nowrap"
          >
            배송지 변경
          </Link>
        </section>
      ) : (
        <OrderAddressEmptySection />
      )}
    </CommonLayout.SectionInnerPadding>
  );
}
