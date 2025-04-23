import { paymentconfirmData } from '@/actions/payments-service';
import { getRecentOrderList } from '@/actions/order-service';
import { paymentConfirmData } from '@/types/PaymentDataType';
import { RecentOrderItemDataType } from '@/types/OrderDataType';
import ConfirmPaymentModalWrapper from '@/components/pages/payment-success/ConfirmPaymentModalWrapper';

interface SearchParams {
  searchParams: Promise<{
    paymentKey: string;
    orderId: string;
    amount: string;
  }>;
}

export default async function PaymentSuccessPage({
  searchParams,
}: SearchParams) {
  const { paymentKey, orderId, amount } = await searchParams;

  console.log('결제 성공 payload:', paymentKey, orderId, amount);

  const payload: paymentConfirmData = {
    paymentKey,
    orderId,
    amount: Number(amount),
  };
  console.log('결제 성공 payload:', payload);

  await paymentconfirmData(payload);
  const orderData: RecentOrderItemDataType = await getRecentOrderList();
  console.log('결제 성공 payload:', orderData);
  return (
    <main className="bg-lightGray-2 font-body">
      <ConfirmPaymentModalWrapper orderData={orderData} />
    </main>
  );
}
