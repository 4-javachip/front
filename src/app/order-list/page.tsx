import { getOrderList, getOrderDetailList } from '@/actions/order-service';
import EmptySection from '@/components/layouts/EmptySection';
import OrderList from '@/components/pages/orderlist/OrderList';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';

export default async function Page() {
  'use server';

  const orderList = await getOrderList();
  if (!orderList || orderList.length === 0) {
    return (
      <main className="padded pb-10">
        <EmptySection
          title="주문 내역이 없습니다."
          description="스타벅스 스토어에서 첫 주문을 진행해보세요."
        />
      </main>
    );
  }

  const fullData = await Promise.all(
    orderList.map(async (item) => {
      const detail = await getOrderDetailList(item.orderListUuid);
      return {
        orderDetail: detail,
        orderList: item,
      };
    })
  );

  return (
    <main className="padded pb-10">
      <TextTitleH1 className="text-2xl">주문 내역</TextTitleH1>
      <OrderList orderListData={fullData} />
    </main>
  );
}
