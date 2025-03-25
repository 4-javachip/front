import Link from 'next/link';
import CloseIcon from '@/components/ui/icons/CloseIcon';

export default function MenuTop() {
  return (
    <div>
      <section className="flex justify-end pb-[24px] pl-1.5 pt-[21px] px-[32px]">
        <Link href="/">
          <CloseIcon />
        </Link>
      </section>

      <section className="w-full">
        <div className="px-6">
          <h2 className="text-[22px] font-semibold font-inter pt-[20px]">
            Welcome !
          </h2>
          <p className="font-inter text-[12px] font-medium text-black pt-[12px] pb-[20px]">
            온라인 스토어에 오신 것을 환영합니다.
          </p>
        </div>

        <div className="flex justify-center">
          <div className=" mx-6 w-full border-b border-[#DADADA] " />
        </div>
      </section>
    </div>
  );
}
