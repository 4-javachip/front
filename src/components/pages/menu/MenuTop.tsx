import Link from 'next/link';
import CloseIcon from '@/components/ui/icons/CloseIcon';

export default function MenuTop() {
  return (
    <section className="px-6 pt-5 pb-6" aria-label="메뉴 상단 영역">
      <nav className="flex justify-end" aria-label="메뉴 닫기">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="메뉴 닫기 버튼"
        >
          <CloseIcon />
        </Link>
      </nav>

      <article className="pt-5">
        <h2 className="text-2xl font-semibold font-inter">Welcome !</h2>
        <p className="font-inter text-xs font-medium text-black pt-3 pb-5">
          온라인 스토어에 오신 것을 환영합니다.
        </p>
      </article>

      <hr className="border-t border-[#DADADA] w-full" />
    </section>
  );
}
