import Link from 'next/link';
import XIcon from '@/components/ui/icons/XIcon';

export default function MenuHeader() {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <section>
        <h2 className="text-lg font-bold">Welcome !</h2>
        <p className="text-sm text-gray-500">
          온라인 스토어에 오신 것을 환영합니다.
        </p>
      </section>
      <Link href="/">
        <XIcon />
      </Link>
    </div>
  );
}
