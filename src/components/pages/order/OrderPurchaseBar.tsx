import { PaymentData } from '@/actions/payments-service';
import { OrderListData } from '@/actions/order-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';

import { OrderItemPayload } from '@/types/OrderDataType';
import { PaymentPayload } from '@/types/PaymentDataType';

export default function OrderPurchaseBar({
  orderItems,
  paymentData,
}: {
  orderItems: OrderItemPayload;
  paymentData: PaymentPayload;
}) {
  const hasAddress =
    'shippingAddressId' in orderItems
      ? !!orderItems.shippingAddressUuid
      : !!orderItems.shippingAddressUuid;
  const handleClick = async () => {
    try {
      const orderListUuid = await OrderListData(orderItems);
      console.log('orderListUuid:', orderListUuid);
      const finalPaymentPayload = {
        ...paymentData,
        orderListUuid,
      };
      console.log('결제 요청 payload:', finalPaymentPayload);

      const { checkoutUrl } = await PaymentData(finalPaymentPayload);

      window.location.href = checkoutUrl;
    } catch (err) {
      console.error('결제 요청 에러:', err);
      alert(
        err instanceof Error ? err.message : '결제 중 문제가 발생했습니다.'
      );
    }
  };

  return (
    <CommonLayout.FixedButtonBgLayout className="flex flex-col w-full py-4 gap-3">
      <CommonButton
        className="font-semibold"
        onClick={handleClick}
        isEnabled={hasAddress}
      >
        결제하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
