'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';

export default function CartPurchaseBar() {
  return (
    <CommonLayout.FixedButtonBgLayout>
      <CommonButton
        className="font-semibold"
        onClick={() => {}}
        isEnabled={true}
      >
        구매하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
