'use client';
import { CommonBorder, CommonLayout } from '@/components/layouts/CommonLayout';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import React from 'react';

export default function SATTop() {
  return (
    <main>
      <ul className="flex justify-between items-center w-full h-full  ">
        <li>
          <TextTitleH1>배송지 정보 수집 및 이용 동의</TextTitleH1>
        </li>
        <div className="flex items-center justify-center px-6 ">
          <Switch />
        </div>
      </ul>
      <CommonLayout.SectionInnerPadding>
        <CommonLayout.CommonBorder />
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
