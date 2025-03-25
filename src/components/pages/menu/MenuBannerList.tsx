import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import Link from 'next/link';

export default function MenuBannerList() {
  return (
    <section className="bg-lightGray-3 px-6" aria-label="메뉴 배너 리스트">
      <ul className="divide-y divide-gray-300">
        <li className="h-19.5 hover:bg-gray-100 flex items-center">
          <Link
            href="/event"
            className="flex justify-between items-center w-full py-3"
          >
            <div className="flex flex-col gap-1">
              <strong className="font-inter font-bold text-sm text-gray-900">
                기획전
              </strong>
              <p className="text-xs text-gray-500">
                진행중인 기획전을 만나보세요.
              </p>
            </div>
            <RightArrowIcon />
          </Link>
        </li>

        <li className="h-19.5 hover:bg-gray-100 flex items-center">
          <Link
            href="/best"
            className="flex justify-between items-center w-full py-3"
          >
            <div className="flex flex-col gap-1">
              <strong className="font-inter font-bold text-sm text-gray-900">
                베스트
              </strong>
              <p className="text-xs text-gray-500">
                스타벅스 베스트 MD 상품만 모아보세요.
              </p>
            </div>
            <RightArrowIcon />
          </Link>
        </li>
      </ul>
    </section>
  );
}
