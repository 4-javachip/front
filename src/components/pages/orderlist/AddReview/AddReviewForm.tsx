'use client';

import { OrderListDetailDataType } from '@/types/OrderDataType';
import { useState } from 'react';
import InputWithLabel from '@/components/ui/inputs/InputWithLabel';
import TextareaWithLabel from '@/components/ui/inputs/TextareaWithLabel';
import DropdownImageInput from '@/components/ui/inputs/DropdownImageInput';
import ConfirmNextButton from '@/components/ui/buttons/ConfirmNextButton.tsx';
import ReviewRatingSection from './ReviewRatingSection';

export default function AddReviewForm({
  orderDetailData,
}: {
  orderDetailData: OrderListDetailDataType;
}) {
  const [rating, setRating] = useState(0);
  const [files, setFiles] = useState<(File | null)[]>([null]);
  const [previews, setPreviews] = useState<(string | null)[]>([null]);

  const handleFileChange = (index: number, file: File | null) => {
    const newFiles = [...files];
    const newPreviews = [...previews];

    newFiles[index] = file;
    newPreviews[index] = file ? URL.createObjectURL(file) : null;

    if (file && files.length < 5 && index === files.length - 1) {
      newFiles.push(null);
      newPreviews.push(null);
    }

    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  return (
    <>
      <ConfirmNextButton onClick={() => {}}>작성 완료</ConfirmNextButton>
      <section className="p-6 mb-[86px]">
        <ReviewRatingSection
          orderDetailData={orderDetailData}
          rating={rating}
          setRating={setRating}
        />
        <form className="pt-8 space-y-4">
          <InputWithLabel
            label="제목"
            id="title"
            placeholder="리뷰 제목을 작성해 주세요."
            maxLength={20}
          />
          <TextareaWithLabel
            label="내용"
            id="content"
            placeholder="구매하신 제품의 후기를 남겨 주세요. (최대 200자)"
            className="h-[200px]"
            maxLength={200}
          />
          <p className="block mb-1 font-semibold font-sd-gothic">
            이미지 <span className="font-medium text-lightGray-1">(선택)</span>
          </p>
          <div className="space-x-2 space-y-2">
            {files.map((_, idx) => (
              <DropdownImageInput
                key={idx}
                index={idx}
                previewUrl={previews[idx]}
                onFileChange={(file) => handleFileChange(idx, file)}
              />
            ))}
          </div>
        </form>
      </section>
    </>
  );
}
