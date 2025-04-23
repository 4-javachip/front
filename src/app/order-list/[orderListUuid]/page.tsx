import { getOrderDetailList, getOrderList } from '@/actions/order-service';
import OrderDetailList from '@/components/pages/orderlist/OrderDetailList';
import OrderDetailTop from '@/components/pages/orderlist/OrderDetailTop';
import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ orderListUuid: string }>;
}) {
  const { orderListUuid } = await params;
  const orderListDetail = await getOrderDetailList(orderListUuid);
  const orderListData = await getOrderList();
  const orderList = orderListData.find(
    (order) => order.orderListUuid === orderListUuid
  );
  return (
    <main>
      {orderList && (
        <OrderDetailList
          orderListDetail={orderListDetail}
          orderListData={orderList}
        />
      )}
    </main>
  );
}
