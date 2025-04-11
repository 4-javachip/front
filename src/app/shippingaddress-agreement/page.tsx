import { CommonLayout } from '@/components/layouts/CommonLayout';
import Description from '@/components/pages/shippingaddress-agreement/Description';
import SATTop from '@/components/pages/shippingaddress-agreement/SATTop';

import React from 'react';

export default function page() {
  return (
    <main>
      <SATTop />
      <CommonLayout.SectionInnerPadding>
        <Description />
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
