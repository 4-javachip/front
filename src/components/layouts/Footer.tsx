import Link from 'next/link';
import FooterLogoIcon from '@/components/ui/icons/FooterLogoIcon';

export default function Footer() {
  return (
    <footer className=" mt-10 w-full pb-[100px]">
      <div className="   ">
        <div className=" pb-4 pt-5 pl-6  text-gray-500 flex justify-start space-x-[11px]  bg-lightGray-3 font-SDGothic font-medium text-xs">
          <Link href="/privacy-policy" className="hover:text-green-600 ">
            개인정보처리방침
          </Link>
          <span className="text-[#CDCDCD]">|</span>
          <Link href="/terms" className="hover:text-green-600">
            홈페이지 이용약관
          </Link>
          <span className="text-[#CDCDCD]">|</span>
          <Link href="/card-terms" className="hover:text-green-600">
            스타벅스카드 이용약관
          </Link>
        </div>

        <div className="flex justify-start  py-0.5 px-4">
          <FooterLogoIcon />
        </div>

        <div className="text-start text-xs bg-white px-4  text-[#999999]">
          &copy; {new Date().getFullYear()} Starbucks Coffee Company. All Rights
          Reserved.Hosting By (주)신세계아이앤씨 <br />
        </div>
      </div>
    </footer>
  );
}
