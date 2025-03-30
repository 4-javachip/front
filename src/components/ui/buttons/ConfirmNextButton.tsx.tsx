'use client';

import { useRouter } from 'next/navigation';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from './CommonButton';

export default function ConfirmNextButton({
  text,
  href,
  isEnabled = () => false,
}: {
  text?: string;
  href: string;
  isEnabled?: () => boolean;
}) {
  const router = useRouter();
  return (
    <CommonLayout.FixedButtonBgLayout>
      <CommonButton
        onClick={() => router.push(href)}
        isEnabled={isEnabled() ? true : false}
      >
        {text}
      </CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
