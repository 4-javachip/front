'use client';

import CommonButton from '@/components/ui/buttons/CommonButton';

import { useRouter } from 'next/navigation';

export default function AddReviewButton({
  orderDetailUuid,
}: {
  orderDetailUuid: string;
}) {
  const router = useRouter();
  return (
    <CommonButton
      isEnabled={true}
      className="bg-background text-gray-1 border border-lightGray-8 py-2"
      onClick={() => router.push(`/addReview/${orderDetailUuid}`)}
    >
      리뷰 작성
    </CommonButton>
  );
}
