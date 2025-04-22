'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import AlertModal from '@/components/ui/dialogs/AlertModal';

export default function PaymentFailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const message = searchParams.get('message');
  const [open, setOpen] = useState(true);

  const handleConfirm = () => {
    setOpen(false);
    router.replace('/'); // 홈으로 보내거나 원하는 경로로
  };

  const decodedMessage = message
    ? decodeURIComponent(message)
    : '결제에 실패했습니다.\n잠시 후 다시 시도해주세요.';

  return (
    <AlertModal
      open={open}
      onOpenChange={setOpen}
      onConfirm={handleConfirm}
      errorMessage={decodedMessage}
      isPreLine
    />
  );
}
