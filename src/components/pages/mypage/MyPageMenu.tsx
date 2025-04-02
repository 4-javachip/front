import AddressAgreementIcon from '@/components/ui/icons/AddressAgreement';
import CouponIcon from '@/components/ui/icons/CouponIcon';
import OrderListIcon from '@/components/ui/icons/OrderListIcon';
import ShippingAddressIcon from '@/components/ui/icons/ShippingAddressIcon';

export default function MyPageMenu() {
  return (
    <section className="h-120 w-full bg-lightGray-2">
      <ul className="px-6 font-body ">
        <li className=" font-semibold pt-7.5 pb-5.5">쇼핑정보</li>
      </ul>

      <ul className="px-6">
        <li className="font-medium text-foreground flex gap-2 pb-8">
          <OrderListIcon /> 주문 내역
        </li>
        <li className="font-medium text-foreground flex gap-2 pb-8">
          <CouponIcon /> 쿠폰
        </li>
        <li className="font-medium text-foreground flex gap-2 pb-8">
          <ShippingAddressIcon /> 배송지 관리
        </li>
      </ul>

      <ul className="px-6 font-semibold pt-2">
        <li className=" font-semibold pt-2.2 pb-5.5">설정</li>
        <li className="font-medium text-foreground flex gap-2 pb-8">
          <AddressAgreementIcon /> 배송지 정보 수집 및 이용 동의
        </li>
      </ul>
    </section>
  );
}
