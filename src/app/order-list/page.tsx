import { getOrderList, getOrderDetailList } from '@/actions/order-service';
import OrderList from '@/components/pages/orderlist/OrderList';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';

export default async function Page() {
  'use server';
  const orderList = await getOrderList();
  const fullData = await Promise.all(
    orderList.map(async (item) => {
      const detail = await getOrderDetailList(item.orderListUuid);
      return {
        orderDetail: detail,
        orderList: item,
      };
    })
  );
  console.log('주문 내역', fullData);

  return (
    <main className="padded pb-10">
      <TextTitleH1 className="text-2xl">주문 내역</TextTitleH1>
      <OrderList orderListData={fullData} />
    </main>
  );
}
