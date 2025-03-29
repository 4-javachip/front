'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';

export default function PerchaseBar() {
  return (
    <CommonLayout.FixedButtonBgLayout>
      <CartIcon />
      <CommonButton className="font-semibold" onClick={() => {}}>
        구매하기
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
