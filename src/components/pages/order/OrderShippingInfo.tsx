'use client';

import { dummyAddresses } from '@/data/dummyDatas';
import Link from 'next/link';
import OrderAddressEmptySection from './OrderAddressEmptySection';
import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function OrderShippingInfo() {
  const defaultAddress = dummyAddresses.find((addr) => addr.defaultAddress);

  return (
    <main className="w-full bg-background border-lightGray-6 text-sm pt-6">
      <h2 className="w-full  text-left text-lg font-pretendard font-semibold text-foreground mb-4 ">
        배송정보
      </h2>

      {defaultAddress ? (
        <section className="flex justify-between items-start">
          <address className="not-italic text-black font-body ">
            <p className=" font-semibold mb-1">
              {defaultAddress.recipientName}({defaultAddress.addressName})
            </p>
            <ul className="text-gray-600 pt-2 ">
              <li>
                ({defaultAddress.zipCode}) {defaultAddress.baseAddress}
                {defaultAddress.detailAddress &&
                  ` ${defaultAddress.detailAddress}`}
              </li>
              <li className="text-foreground pt-2">
                {defaultAddress.phoneNumber}
              </li>
            </ul>
          </address>

          <Link
            href="/address"
            className="border font-pretendard border-lightGray-4 text-foreground px-4 py-1.5 rounded-full text-sm transition "
          >
            변경
          </Link>
        </section>
      ) : (
        <OrderAddressEmptySection />
      )}
      <CommonLayout.CommonBorder />
    </main>
  );
}
