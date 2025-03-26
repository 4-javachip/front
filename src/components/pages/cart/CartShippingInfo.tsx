'use client';

import { dummyAddresses } from '@/data/dummyDatas';
import { AddressType } from '@/types/ResponseDataTypes';
import Link from 'next/link';

export default function CartShippingInfo() {
  const defaultAddress: AddressType | undefined = dummyAddresses.find(
    (addr) => addr.defaultAddress
  );

  return (
    <section
      className="w-full  bg-[#F7F7F7]  border-lightGray-6 px-6 py-6 text-sm"
      aria-label="배송지 정보"
    >
      {defaultAddress ? (
        <section className="flex justify-between items-start">
          <address className="not-italic text-black leading-snug">
            <p className="font-medium mb-1">{defaultAddress.addressName}</p>
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
        <section className="flex justify-between items-start">
          <article className="text-black leading-snug">
            <p>등록된 배송지가 없습니다.</p>
            <p>배송지를 등록해주세요.</p>
          </article>
          <Link
            href="/address"
            className="text-brown font-medium whitespace-nowrap"
          >
            배송지 등록
          </Link>
        </section>
      )}
    </section>
  );
}
