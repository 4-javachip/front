import { CommonLayout } from '@/components/layouts/CommonLayout';
import { CouponIcon } from '@/components/ui/icons/CouponIcon';

export default function OrderCoupon() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-pretendard font-semibold flex items-center gap-2">
          쿠폰
        </h2>
      </div>
      <ul className="flex justify-between items-center mb-4">
        <li className="flex items-center gap-2">
          <CouponIcon /> 쿠폰
        </li>
      </ul>
    </section>
  );
}
