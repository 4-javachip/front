import { paymentconfirmData } from '@/actions/payments-service';
import { getRecentOrderList } from '@/actions/order-service';
import PaymentPurchaseBar from '@/components/pages/payment-success/PaymentPurchasebar';
import { paymentConfirmData } from '@/types/PaymentDataType';
import { RecentOrderItemDataType } from '@/types/OrderDataType';
import PaymentProductInfo from '@/components/pages/payment-success/PaymentProductInfo';
import PaymentInfo from '@/components/pages/payment-success/PaymentInfo';
import PaymentAddressInfo from '@/components/pages/payment-success/PaymentAddressInfo';
import ConfirmPaymentModalWrapper from '@/components/pages/payment-success/ConfirmPaymentModalWrapper';

// interface SearchParams {
//   searchParams: Promise<{
//     paymentKey: string;
//     orderId: string;
//     amount: string;
//   }>;
// }

// export default async function PaymentSuccessPage({
//   searchParams,
// }: SearchParams) {
//   const { paymentKey, orderId, amount } = await searchParams;

//   // if (!paymentKey || !orderId || !amount) {
//   //   redirect('/error');
//   // }
//   console.log('결제 성공 payload:', paymentKey, orderId, amount);

//   const payload: paymentConfirmData = {
//     paymentKey,
//     orderId,
//     amount: Number(amount),
//   };
//   console.log('결제 성공 payload:', payload);

export default async function PaymentSuccessPage() {
  // await paymentconfirmData(payload);
  const orderData: RecentOrderItemDataType = await getRecentOrderList();
  console.log('결제 성공 payload:', orderData);
  return (
    <main className="bg-lightGray-2 font-body">
      {/* <PaymentAddressInfo orderListItem={orderData} />
      <PaymentProductInfo orderListItem={orderData} />
      <PaymentInfo orderListItem={orderData} />
      <PaymentPurchaseBar /> */}
      <ConfirmPaymentModalWrapper orderData={orderData} />
    </main>
  );
}
