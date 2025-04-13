import { shippingAddressAgreementType } from '@/types/ResponseDataTypes';
import React from 'react';

export default function Description({
  agreement,
}: {
  agreement: shippingAddressAgreementType;
}) {
  return (
    <div>
      <p>{agreement.description}</p>
    </div>
  );
}
