'use client';

import { OrderListData } from '@/actions/order-service';
import { PaymentData } from '@/actions/payments-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import { useOrderItemContext } from '@/context/OrderItemContext';
import { usePaymentSuccessContext } from '@/context/PaymentSuccessContext';
import { EnrichedOrderItemDataType } from '@/types/OrderDataType';

export default function OrderPurchaseBar() {
  const { paymentData } = useOrderItemContext();
  const { setPaymentSuccessData } = usePaymentSuccessContext();
  console.log('paymentData', paymentData);
  const handleClick = async () => {
    try {
      const { checkoutUrl, paymentUuid } = await PaymentData(paymentData);
      setPaymentSuccessData((prev) => ({
        ...prev,
        paymentUuid: paymentUuid,
      }));
      console.log('paymentData', paymentData);
      console.log('payment');
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error('결제 요청 에러:', err);
      alert(
        err instanceof Error ? err.message : '결제 중 문제가 발생했습니다.'
      );
    }
  };
  // const payload = {
  //   orderPrice: orderPrice,
  //   totlaOriginPrice,

  //   orderItems: orderItems.map((item) => ({
  //     productUuid: item.productUuid,
  //     productOptionUuid: item.optionUuid,
  //     quantity: item.quantity,
  //     price: item.productPrice,
  //     totalPrice: item.productSalePrice,
  //   })),
  //   fromCart: true,
  // };
  // const handleClick = async () => {
  //   await OrderListData(payload);
  // };

  return (
    <CommonLayout.FixedButtonBgLayout className="flex flex-col w-full py-4 gap-3">
      <CommonButton
        className="font-semibold"
        onClick={handleClick}
        isEnabled={true}
      >
        결제하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
