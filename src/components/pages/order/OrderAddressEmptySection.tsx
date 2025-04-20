'use client';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import AddressRegisterButton from '@/components/ui/buttons/AddressRegisterButton';

export default function OrderAddressEmptySection() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-6">
      <article className="text-black text-[0.9375rem] leading-relaxed mb-6 font-pretendard font-medium">
        <p>등록된 배송지가 없습니다.</p>
        <p>배송지를 등록해주세요.</p>
      </article>
      <AddressRegisterButton />
      <CommonLayout.CommonBorder />
    </section>
  );
}
