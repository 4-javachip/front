import Link from 'next/link';
import AddressAgreementIcon from '@/components/ui/icons/AddressAgreement';
import OrderListIcon from '@/components/ui/icons/OrderListIcon';
import ReviewIcon from '@/components/ui/icons/ReviewIcon';
import ShippingAddressIcon from '@/components/ui/icons/ShippingAddressIcon';
import WishIcon from '@/components/ui/icons/WishIcon';

export default function MyPageMenu() {
  return (
    <section className="h-200 w-full bg-lightGray-2">
      <ul className="px-6 font-body ">
        <li className=" font-semibold pt-7.5 pb-5.5">쇼핑정보</li>
      </ul>

      <ul className="px-6">
        <li className="font-medium text-foreground flex gap-2 pb-7">
          <Link href="/order-list" className="flex gap-2 items-center">
            <OrderListIcon /> 주문 내역
          </Link>
        </li>
        <li className="font-medium text-foreground flex gap-2 pb-7">
          <Link href="shippingaddresses" className="flex gap-2 items-center">
            <ShippingAddressIcon /> 배송지 관리
          </Link>
        </li>
        <li className="font-medium text-foreground flex gap-2 pb-7">
          <Link href="/wishlist" className="flex gap-2 items-center">
            <WishIcon /> 찜 목록
          </Link>
        </li>
        <li className="font-medium text-foreground flex gap-2 pb-7">
          <Link href="/mypage/reviews" className="flex gap-2 items-center">
            <ReviewIcon /> 리뷰 관리
          </Link>
        </li>
      </ul>

      <ul className="px-6 font-semibold pt-2">
        <li className=" font-semibold pt-3 pb-5.5">설정</li>
        <li className="font-medium text-foreground flex gap-2 pb-8">
          <Link
            href="/shippingaddressagreement"
            className="flex gap-2 items-center"
          >
            <AddressAgreementIcon /> 배송지 정보 수집 및 이용 동의
          </Link>
        </li>
      </ul>
    </section>
  );
}
