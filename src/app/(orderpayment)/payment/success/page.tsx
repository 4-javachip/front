import { useSearchParams } from 'next/navigation';
import { usePaymentSuccessContext } from '@/context/PaymentSuccessContext';
import Image from 'next/image';
import PaymentPurchaseBar from '@/components/pages/payment-success/PaymentPurchasebar';

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const { paymentSuccessData } = usePaymentSuccessContext();

  const paymentKey = params.get('paymentKey');
  const orderId = params.get('orderId');
  const amount = params.get('amount');
  console.log('파람스', paymentKey, orderId, amount);

  console.log('결제결제결제성공 ', paymentSuccessData);

  return (
    <main className=" bg-lightGray-2 font-body not-invalid:">
      <p className="bg-background p-6 font-semibold text-3xl">
        {' '}
        주문이 완료되었습니다{' '}
      </p>
      <address className="not-italic bg-background px-6 py-6 mt-3">
        <h2 className="font-bold mb-2 text-lg ">배송 정보</h2>
        <div className="space-y-0.5 leading-relaxed">
          <p className="font-semibold">
            {orderListItem?.addressName} ({orderListItem?.recicpientName})
          </p>
          <p className="text-sm text-gray-800">
            ({orderListItem?.ziquCode}) {orderListItem?.baseAddress}
            {orderListItem?.detailAddress}
          </p>
          <p className="text-sm text-gray-800">
            {orderListItem?.phoneNumber} {orderListItem?.secondPhoneNumber}
          </p>
          <p>{orderListItem?.shippingNote}</p>
        </div>
      </address>
      <section className="mt-3 py-6 px-6 bg-background">
        <div className="flex  col-end-2 items-center mb-4">
          <h2 className="font-bold text-lg">주문내역</h2>
          <p className="text-sm text-gray-600 border-l pl-2 leading-4">
            상품 {orderListItem?.orderItems.length ?? 0}개
          </p>
        </div>

        {orderListItem?.orderItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={100}
              height={100}
              className="rounded"
            />
            <div>
              <p className="font-medium text-sm mb-1">{item.name}</p>
              <p className="text-sm text-gray-600">{item.qauntity}개</p>
            </div>
          </div>
        ))}
      </section>
      {/* {orderListItem && ( */}
      <section className="border-t pt-6 bg-background px-6 mt-3">
        <p className="text-lg font-semibold mb-1">결제 금액</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">{orderListItem?.method}</p>
          <p className="text-xl font-bold mb-1">
            {orderListItem?.totalPurchasePrice.toLocaleString()}원
          </p>
        </div>
        <div className="flex justify-between items-center mb-1">
          <p>결제 상태 </p>
          <p>{orderListItem?.paymentStatus}</p>
        </div>
        <PaymentPurchaseBar />
      </section>
      {/* )} */}
    </main>
  );
}
