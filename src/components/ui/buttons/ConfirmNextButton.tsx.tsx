'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from './CommonButton';
import { cn } from '@/lib/utils';

export default function ConfirmNextButton({
  className,
  children,
  onClick,
  isEnabled = () => false,
  type,
}: {
  className?: string;
  children?: React.ReactNode;
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
        {children}
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
