// components/menu/MenuFooter.tsx
import Link from 'next/link';

export default function MenuFooter() {
  return (
    <div className=" mt-4">
      <Link
        href="/event"
        className="flex justify-between p-4 hover:bg-gray-100"
      >
        <span>기획전</span> <span>→</span>
      </Link>
      <Link href="/best" className="flex justify-between p-4 hover:bg-gray-100">
        <span>베스트</span> <span>→</span>
      </Link>
    </div>
  );
}
