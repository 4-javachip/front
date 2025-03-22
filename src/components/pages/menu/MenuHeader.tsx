import Link from 'next/link';
import XIcon from '@/components/ui/icons/XIcon';

export default function MenuHeader() {
  return (
    <div>
      {/* X 버튼 영역 */}
      <section className="flex justify-end pb-[24px] pt-[21px] px-[32px]">
        <Link href="/">
          <XIcon />
        </Link>
      </section>

      {/* 텍스트 + border 영역 */}
      <section className="w-full">
        {/* 텍스트 왼쪽 정렬 */}
        <div className="px-[24px]">
          <h2 className="text-[22px] font-semibold font-inter pt-[20px]">
            Welcome !
          </h2>
          <p className="font-inter text-[12px] font-medium text-black pt-[12px] pb-[20px]">
            온라인 스토어에 오신 것을 환영합니다.
          </p>
        </div>

        {/* 가운데 정렬된 긴 border */}
        <div className="flex justify-center">
          <div className="w-[90%] border-b border-gray-300" />
        </div>
      </section>
    </div>
  );
}
