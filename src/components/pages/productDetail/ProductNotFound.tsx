import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <section className="font-sd-gothic text-lightGray-6 text-center py-50">
      <p className="pb-1">상품을 찾을 수 없습니다.</p>
      <Link href="/" className="underline">
        홈으로
      </Link>
    </section>
  );
}
