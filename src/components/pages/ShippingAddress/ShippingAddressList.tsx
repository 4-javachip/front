'use client';

import Link from 'next/link';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { ShippingAddressDataType } from '@/types/RequestDataTypes';
import { ShippingAddressListType } from '@/types/ResponseDataTypes';
import EmptyAddress from './EmptyAddress';
import { useRouter } from 'next/navigation';
import { deleteShippingAddress } from '@/actions/shipping-address-service';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';

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
  const router = useRouter();

  const maxAddressLimit = 10;
  const isAddButtonDisalbed = addressLength >= maxAddressLimit;

  const sortedAddress = address.sort((a, b) => {
    if (a.addressList.defaulted && !b.addressList.defaulted) return -1;
    if (!a.addressList.defaulted && b.addressList.defaulted) return 1;
    return 0;
  });

  const handleDelete = async (shippingAddressUuid: string) => {
    try {
      await deleteShippingAddress(shippingAddressUuid);
    } catch (error) {
      console.error('배송지 삭제 실패:', error);
    }
  };
  return (
    <main className="w-full bg-background text-sm pt-6 py-24">
      <CommonLayout.SectionInnerPadding>
        {addressLength === 0 ? (
          <EmptyAddress />
        ) : (
          <ul className="space-y-4">
            {sortedAddress.map(({ address, addressList }, index) => (
              <li key={addressList.shippingAddressUuid}>
                <article className="flex justify-between items-start pb-4 ">
                  <div className="flex flex-col gap-1 w-60 font-body">
                    <ul className="flex items-center  gap-2">
                      <li>
                        <strong className="text-basefont-semibold text-lightGray-12 leading-7">
                          {address.addressName} ({address.recipientName})
                        </strong>
                      </li>
                      {addressList.defaulted && (
                        <li>
                          <span className="inline-flex items-center text-[10px] text-green px-1 py-0.5 bg-emerald-50">
                            기본
                          </span>
                        </li>
                      )}
                    </ul>

                    <address className="not-italic font-light text-sm text-foreground">
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

                  <nav className="flex items-center pl-2 gap-2 font-body text-xs text-lightGray-7">
                    <Link
                      href={`/shipping-addresses/${addressList.shippingAddressUuid}`}
                    >
                      수정
                    </Link>
                    {!addressList.defaulted && (
                      <button
                        className="border-l-2 border-lightGray-5 pl-2 leading-3"
                        onClick={() =>
                          handleDelete(addressList.shippingAddressUuid)
                        }
                      >
                        삭제
                      </button>
                    )}
                  </nav>
                </article>

                {index < addressLength - 1 && <CommonLayout.CommonBorder />}
              </li>
            ))}
          </ul>
        )}
      </CommonLayout.SectionInnerPadding>

      <ConfirmNextButton
        className="font-semibold"
        isEnabled={() => !isAddButtonDisalbed}
        onClick={() => router.push('/shipping-add')}
      >
        {isAddButtonDisalbed
          ? '최대 배송지 등록은 10개 까지 입니다 '
          : '+새로운배송지추가'}
      </ConfirmNextButton>
    </main>
  );
}
