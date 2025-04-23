import { CommonLayout } from '@/components/layouts/CommonLayout';
import CloseButton from '@/components/ui/buttons/CloseButton';
import { Dispatch, SetStateAction } from 'react';
import AddReviewForm from './AddReviewForm';
import { OrderListDetailDataType } from '@/types/OrderDataType';

export default function AddReviewModal({
  setIsAddReviewModalOpen,
  orderDetailData,
}: {
  setIsAddReviewModalOpen: Dispatch<SetStateAction<boolean>>;
  orderDetailData: OrderListDetailDataType;
}) {
  return (
    <div
      className="fixed inset-0 max-w-[var(--base-w)]
      z-[3000] w-full h-full bg-background
      border-r border-lightGray-5"
    >
      <CommonLayout.CommonHeader className="padded flex items-center gap-3.5">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-sm font-semibold ">
          리뷰 작성
        </h1>
        <CloseButton
          onClick={() => setIsAddReviewModalOpen(false)}
          className="ml-auto"
        />
      </CommonLayout.CommonHeader>
      <section className="pt-14">
        <AddReviewForm orderDetailData={orderDetailData} />
      </section>
    </div>
  );
}
