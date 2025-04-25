import { OrderListDataType } from '@/types/OrderDataType';
import React from 'react';

export default function OrderPaymentInfo({
  item,
}: {
  item: OrderListDataType;
}) {
  const discountPrice = item.totalOriginPrice - item.totalPurchasePrice;
  console.log('method', item.method);
  return (
    <section className="font-body text-sm border-t-10 border-lightGray-2 px-6 pb-10">
      <p className="text-lg font-semibold py-4">결제 정보</p>
      <div className=" font-pretendard text-sm">
        <ul className="flex justify-between font-semibold">
          <li>주문 금액</li>{' '}
          <li>{item.totalPurchasePrice.toLocaleString()}원 </li>
        </ul>
        <ul className="flex justify-between py-5  ">
          <li>상품 금액 </li>
          <li>{item.totalOriginPrice.toLocaleString()}원</li>
        </ul>
        <ul className="flex justify-between py-5 font-semibold text-base border-y  ">
          <li>할인 금액 </li>
          <li>{discountPrice.toLocaleString()}원</li>
        </ul>
        <ul className="flex justify-between py-5 font-medium text-base   ">
          <li>결제 금액 </li>
          <li className="font-semibold">
            {item.totalPurchasePrice.toLocaleString()}원
          </li>
        </ul>
        <ul className="flex justify-between pb-5 font-medium text-base border-b  ">
          <li>{item.method} </li>
          <li className="font-semibold">
            {item.totalPurchasePrice.toLocaleString()}원
          </li>
        </ul>
      </div>
    </section>
  );
}
