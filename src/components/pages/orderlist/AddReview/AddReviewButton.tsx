'use client';

import CommonButton from '@/components/ui/buttons/CommonButton';
import { useState } from 'react';
import AddReviewModal from './AddReviewModal';

export default function AddReviewButton() {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  return (
    <>
      <CommonButton
        isEnabled={true}
        className="bg-background text-gray-1 border border-lightGray-8 py-2"
        onClick={() => setIsAddReviewModalOpen((prev) => !prev)}
      >
        리뷰 작성
      </CommonButton>
      {isAddReviewModalOpen && (
        <AddReviewModal setIsAddReviewModalOpen={setIsAddReviewModalOpen} />
      )}
    </>
  );
}
