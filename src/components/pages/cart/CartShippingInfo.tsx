'use client';
import AddressEmptySection from './AddressEmptySection';
import { DefaultShippingAddressType } from '@/types/ShippingAddressDataType';
import DefaultIcon from '@/components/ui/icons/DefaultIcon';

export default function CartShippingInfo({
  defaultShippingAddress,
}: {
  defaultShippingAddress: DefaultShippingAddressType;
}) {
  const isEmpty = !defaultShippingAddress.shippingAddressUuid;
  return (
    <section className="w-full  bg-lightGray-2  border-lightGray-6 px-6 text-sm py-6 font-body">
      {!isEmpty ? (
        <section className="flex justify-between items-start ">
          <address className="not-italic text-foreground leading-snug">
            <ul className="flex items-center  gap-2">
              <li>
                <strong className="text-basefont-semibold text-lightGray-12 leading-7">
                  {defaultShippingAddress.addressName} (
                  {defaultShippingAddress.recipientName})
                </strong>
              </li>
              {defaultShippingAddress.defaulted && <DefaultIcon />}
            </ul>
            <ul className="font-medium leading-snug">
              <li>
                ({defaultShippingAddress.zipCode}){' '}
                {defaultShippingAddress.baseAddress}
              </li>
              <li>{defaultShippingAddress.detailAddress}</li>
            </ul>
            <ul className="flex items-center gap-2 font-pretendard text-xs text-lightGray-7 leading-7">
              <li>{defaultShippingAddress.phoneNumber}</li>
              <li className="border-l-2 pl-2 leading-3">
                {defaultShippingAddress.secondPhoneNumber}
              </li>
            </ul>
          </address>
        </section>
      ) : (
        <AddressEmptySection />
      )}
    </section>
  );
}
