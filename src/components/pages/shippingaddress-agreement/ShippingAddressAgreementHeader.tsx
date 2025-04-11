'use client';
import { userAgreement } from '@/actions/agreement-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { Switch } from '@/components/ui/switch';

import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { UserAgreementType } from '@/types/AgreementDataType';
import React, { useEffect, useState } from 'react';

export default function ShippingAddressAgreementHeader({
  userAgreed,
  agreementId,
}: {
  userAgreed: UserAgreementType[];
  agreementId: number;
}) {
  const [isCheck, setIsCheck] = useState(false);
  console.log('userAgreed', userAgreed);
  const handleClick = async () => {
    console.log('handleClick', isCheck);
    await userAgreement({
      agreementId: agreementId,
      agreed: !isCheck,
    });
  };

  useEffect(() => {
    setIsCheck(userAgreed.length > 0 ? userAgreed[0].agreed : false);
  }, [userAgreed]);

  return (
    <main>
      <ul className="flex justify-between items-center w-full h-full  ">
        <li>
          <TextTitleH1>배송지 정보 수집 및 이용 동의</TextTitleH1>
        </li>
        <div className="flex items-center justify-center px-6 ">
          <Switch checked={isCheck} onClick={handleClick} />
        </div>
      </ul>
      <CommonLayout.SectionInnerPadding>
        <CommonLayout.CommonBorder />
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
