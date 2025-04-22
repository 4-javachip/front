'use client';

import { useState } from 'react';

import { RecentOrderItemDataType } from '@/types/OrderDataType';
import PaymentAddressInfo from './PaymentAddressInfo';
import PaymentProductInfo from './PaymentProductInfo';
import PaymentInfo from './PaymentInfo';
import PaymentPurchaseBar from './PaymentPurchasebar';
import AlertModal from '@/components/ui/dialogs/AlertModal';

export default function ConfirmPaymentModalWrapper({
  orderData,
}: {
  orderData: RecentOrderItemDataType;
}) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      {!confirmed && (
        <AlertModal
          open
          onOpenChange={() => {}}
          errorMessage="결제가 정상적으로 완료되었습니다. 주문 내역을 확인해주세요."
          onConfirm={() => setConfirmed(true)}
          isPreLine
        />
      )}
      {confirmed && (
        <>
          <PaymentAddressInfo orderListItem={orderData} />
          <PaymentProductInfo orderListItem={orderData} />
          <PaymentInfo orderListItem={orderData} />
          <PaymentPurchaseBar />
        </>
      )}
    </>
  );
}
