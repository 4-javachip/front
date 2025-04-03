'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from './CommonButton';
import { cn } from '@/lib/utils';

export default function ConfirmNextButton({
  className,
  text,
  onClick,
  isEnabled = () => false,
}: {
  className?: string;
  text?: string;
  onClick: () => void;
  isEnabled?: () => boolean;
}) {
  return (
    <CommonLayout.FixedButtonBgLayout className={cn(className)}>
      <CommonButton onClick={onClick} isEnabled={isEnabled()}>
        {text}
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
