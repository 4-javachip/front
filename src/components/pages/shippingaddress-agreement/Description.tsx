import { ShipingAddressAGgreementType } from '@/types/AgreementDataType';
import React from 'react';

export default function Description({
  agreement,
}: {
  agreement: ShipingAddressAGgreementType;
}) {
  return (
    <div>
      <p>{agreement.description}</p>
    </div>
  );
}
