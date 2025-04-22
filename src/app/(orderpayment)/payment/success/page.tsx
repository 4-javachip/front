import { paymentconfirmData } from '@/actions/payments-service';
import { getRecentOrderList } from '@/actions/order-service';
import PaymentPurchaseBar from '@/components/pages/payment-success/PaymentPurchasebar';
import { paymentConfirmData } from '@/types/PaymentDataType';
import { RecentOrderItemDataType } from '@/types/OrderDataType';
import PaymentProductInfo from '@/components/pages/payment-success/PaymentProductInfo';
import PaymentInfo from '@/components/pages/payment-success/PaymentInfo';
import PaymentAddressInfo from '@/components/pages/payment-success/PaymentAddressInfo';

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

  // if (!paymentKey || !orderId || !amount) {
  //   redirect('/error');
  // }

  const payload: paymentConfirmData = {
    paymentKey,
    orderId,
    amount: Number(amount),
  };

  await paymentconfirmData(payload);
  const orderData: RecentOrderItemDataType = await getRecentOrderList();

  return (
    <main className="bg-lightGray-2 font-body">
      <PaymentAddressInfo orderListItem={orderData} />
      <PaymentProductInfo orderListItem={orderData} />
      <PaymentInfo orderListItem={orderData} />
      <PaymentPurchaseBar />
    </main>
  );
}
