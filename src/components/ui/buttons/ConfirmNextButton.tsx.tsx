'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from './CommonButton';
import { cn } from '@/lib/utils';

export default function ConfirmNextButton({
  className,
  text,
  onClick,
  isEnabled = () => false,
  type,
}: {
  className?: string;
  text?: string;
  onClick: () => void;
  isEnabled?: () => boolean;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <CommonLayout.FixedButtonBgLayout className={cn(className)}>
      <CommonButton
        onClick={onClick}
        isEnabled={isEnabled()}
        type={type ?? 'button'}
      >
        {text}
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
