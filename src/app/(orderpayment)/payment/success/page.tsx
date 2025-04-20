'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePaymentSuccessContext } from '@/context/PaymentSuccessContext';

import { PaymentSuccessReturnType } from '@/types/PaymentDataType';
import { OrderListData } from '@/actions/order-service';

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const { paymentSuccessData } = usePaymentSuccessContext();

  const paymentKey = params.get('paymentKey');
  const orderId = params.get('orderId');
  const amount = params.get('amount');

  const [orderSummary, setOrderSummary] =
    useState<PaymentSuccessReturnType | null>(null);

  useEffect(() => {
    if (!paymentKey || !orderId || !amount || !paymentSuccessData.paymentUuid)
      return;

    const submitOrder = async () => {
      try {
        const payload = {
          ...paymentSuccessData,
          paymentKey,
          orderId,
          amount: Number(amount),
        };

        const result = await OrderListData(payload);
        setOrderSummary(result);
      } catch (error) {
        console.error('❌ 주문 생성 실패:', error);
        alert('주문 생성 중 문제가 발생했습니다.');
      }
    };

    submitOrder();
  }, [paymentKey, orderId, amount, paymentSuccessData.paymentUuid]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-green-600">🎉 결제 성공</h2>

      {orderSummary && (
        <>
          <p className="mt-4">주문번호: {orderSummary.orderListUuid}</p>
          <p>결제 상태: {orderSummary.paymentStatus}</p>
          <p>총 금액: {orderSummary.totalPurchasePrice.toLocaleString()}원</p>

          <h3 className="mt-6 font-semibold">주문 상품</h3>
          <ul className="mt-2 space-y-2">
            {orderSummary.orderItems.map((item, i) => (
              <li key={i} className="border p-3 rounded shadow-sm">
                <p>{item.name}</p>
                <p>
                  {item.sizeName} / {item.colorName}
                </p>
                <p>수량: {item.qauntity}</p>
                <img
                  src={item.thumbnail}
                  alt="썸네일"
                  className="w-20 h-20 object-cover mt-2"
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
