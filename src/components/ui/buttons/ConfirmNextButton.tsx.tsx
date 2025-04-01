'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from './CommonButton';

export default function ConfirmNextButton({
  text,
  onClick,
  isEnabled = () => false,
}: {
  text?: string;
  onClick: () => void;
  isEnabled?: () => boolean;
}) {
  return (
    <CommonLayout.FixedButtonBgLayout>
      <CommonButton onClick={onClick} isEnabled={isEnabled()}>
        {text}
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
