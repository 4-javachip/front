import {
  getShippingAddressAgreement,
  getUserShippingAddressAgreement,
} from '@/actions/agreement-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import Description from '@/components/pages/shippingaddress-agreement/Description';
import ShippingAddressAgreementHeader from '@/components/pages/shippingaddress-agreement/ShippingAddressAgreementHeader';

export default async function page() {
  const [agreements, userAgreed] = await Promise.all([
    getShippingAddressAgreement(),
    getUserShippingAddressAgreement(),
  ]);

  return (
    <main>
      <ShippingAddressAgreementHeader
        userAgreed={userAgreed}
        agreementId={agreements[0].id}
      />
      <CommonLayout.SectionInnerPadding>
        {agreements.map((agreement) => (
          <Description key={agreement.id} agreement={agreement} />
        ))}
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
