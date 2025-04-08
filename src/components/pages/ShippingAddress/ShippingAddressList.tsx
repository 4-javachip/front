'use client';

import Link from 'next/link';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressListType } from '@/types/ResponseDataTypes';

interface ShippingAddressItemProps {
  address: ShippingAddressDataType;
  addressList: ShippingAddressListType;
}

export default function ShippingAddressList({
  address,
}: {
  address: ShippingAddressItemProps[];
}) {
  const addressLength = address.length;

  return (
    <main className="w-full bg-background text-sm pt-6 px-4">
      <ul className="space-y-4">
        {address.map(({ address, addressList }, index) => (
          <li key={addressList.shippingAddressUuid}>
            <article className="flex justify-between items-start pb-4">
              <div className="flex flex-col gap-1 font-body">
                <ul className="flex items-center gap-2">
                  <li>
                    <strong className="text-base font-semibold text-lightGray-12">
                      {address.addressName} ({address.recipientName})
                    </strong>
                  </li>
                  {addressList.defaulted && (
                    <li>
                      <span className="inline-flex items-center text-xs text-green px-1 py-0.5 bg-emerald-100">
                        기본
                      </span>
                    </li>
                  )}
                </ul>

                <address className="not-italic font-light text-xs text-foreground">
                  ({address.zipCode}) {address.baseAddress}
                  <br />
                  {address.detailAddress}
                </address>
              </div>

              <nav className="flex items-center gap-2">
                <Link
                  href={`/shipping-address/${addressList.shippingAddressUuid}`}
                  className="text-sm text-lightGray-7 px-2"
                >
                  수정
                </Link>
                {!addressList.defaulted && (
                  <button className="border-l-2 border-lightGray-5 pl-2 leading-3 text-lightGray-7">
                    삭제
                  </button>
                )}
              </nav>
            </article>

            {index < addressLength - 1 && <CommonLayout.CommonBorder />}
          </li>
        ))}
      </ul>
    </main>
  );
}
