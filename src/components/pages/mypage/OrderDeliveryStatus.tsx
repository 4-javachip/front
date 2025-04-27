import { getOrderListCount } from '@/actions/order-service';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';

export default async function OrderDeliveryStatus() {
  const data = await getOrderListCount();
  const successCount = data.success ? data.data ?? 0 : 0;
  const statusList = [
    { label: '결제완료', count: successCount ?? 0 },
    { label: '상품준비중', count: 0 },
    { label: '배송중', count: 0 },
    { label: '배송완료', count: 0 },
  ];

  return (
    <section>
      <ul className="flex justify-between items-center mb-4 pt-7 px-6 font-body">
        <li className=" font-semibold flex items-center gap-2">
          주문/배송현황
        </li>
        <li className="text-lightGray-1 text-xs">최근 3개월동안 구매한 상품</li>
      </ul>

      <ul className="flex items-center justify-between text-center pt-6 pb-5">
        {statusList.map((status, idx) => (
          <div key={status.label} className="flex-1 relative">
            <li className="text-2xl font-semibold font-inter text-lightGray-4">
              {status.count}
            </li>
            <li className="mt-2 text-sm font-medium text-foreground">
              {status.label}
            </li>
            {idx < statusList.length - 1 && (
              <li className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 ">
                <RightArrowIcon />
              </li>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
}
