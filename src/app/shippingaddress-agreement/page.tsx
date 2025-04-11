import {
  getShippingAddressAgreement,
  getUserShippingAddressAgreement,
} from '@/actions/agreement-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import Description from '@/components/pages/shippingaddress-agreement/Description';
import SATTop from '@/components/pages/shippingaddress-agreement/SATTop';

import React from 'react';

const agreements = await getShippingAddressAgreement();
const userAgreed = await getUserShippingAddressAgreement();
export default function page() {
  return (
    <main>
      <SATTop userAgreed={userAgreed} />
      <CommonLayout.SectionInnerPadding>
        {agreements.map((agreement) => (
          <Description key={agreement.id} agreement={agreement} />
        ))}
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
