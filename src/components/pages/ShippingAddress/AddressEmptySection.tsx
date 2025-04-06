import Link from 'next/link';

export default function AddressEmptySection() {
  return (
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
  );
}
