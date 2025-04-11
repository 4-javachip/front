'use client';
import { CommonLayout } from '@/components/layouts/CommonLayout';

import { Switch } from '@/components/ui/switch';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { UserAgreementType } from '@/types/AgreementDataType';
import React, { useState } from 'react';

export default function SATTop({
  userAgreed,
}: {
  userAgreed: UserAgreementType[];
}) {
  const agreementId = 4;
  const initial =
    userAgreed.find((ua) => ua.agreementId === agreementId)?.agreed ?? false;
  const [agreed, setAgreed] = useState(initial);

  const handleChange = (checked: boolean) => {
    setAgreed(checked);
    console.log('배송지 정보 수집 및 이용 동의 여부:', !agreed);
  };

  return (
    <main>
      <ul className="flex justify-between items-center w-full h-full  ">
        <li>
          <TextTitleH1>배송지 정보 수집 및 이용 동의</TextTitleH1>
        </li>
        <div className="flex items-center justify-center px-6 ">
          <Switch checked={agreed} onCheckedChange={handleChange} />
        </div>
      </ul>
      <CommonLayout.SectionInnerPadding>
        <CommonLayout.CommonBorder />
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
