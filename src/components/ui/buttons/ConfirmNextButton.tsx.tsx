'use client';

import { useRouter } from 'next/navigation';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from './CommonButton';

export default function ConfirmNextButton({
  text,
  href,
}: {
  text?: string;
  href: string;
}) {
  const router = useRouter();
  return (
    <CommonLayout.FixedButtonBgLayout>
      <CommonButton onClick={() => router.push(href)}>{text}</CommonButton>
    </CommonLayout.FixedButtonBgLayout>
  );
}
