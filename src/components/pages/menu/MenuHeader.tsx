import Link from 'next/link';
import XIcon from '@/components/ui/icons/XIcon';

export default function MenuHeader() {
  return (
    <div className=" p-4 border-b">
      <section>
        <Link href="/" className="flex items-end">
          <XIcon />
        </Link>
      </section>
      <section className="px-[24px]">
        <h2 className="text-[22px] font-semibold font-inter ">Welcome !</h2>
        <p className="text-sm text-gray-500">
          온라인 스토어에 오신 것을 환영합니다.
        </p>
      </section>
    </div>
  );
}
