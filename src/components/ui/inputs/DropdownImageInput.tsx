'use client';

import { CommonResposiveNextImage } from '../CommonResponsiveNextImage';
import AddImageIcon from '../icons/AddImageIcon';

export default function DropdownImageInput({
  index,
  previewUrl,
  onFileChange,
}: {
  index: number;
  previewUrl: string | null;
  onFileChange: (file: File | null) => void;
}) {
  return (
    <div className="inline-block align-top">
      <label
        htmlFor={`image-${index}`}
        className="flex flex-col items-center justify-center w-full h-64 
          border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
          bg-gray-50 hover:bg-gray-100
          transition-colors duration-100 ease-in-out
          overflow-hidden
          max-w-[110px] max-h-[110px]"
      >
        {previewUrl ? (
          <CommonResposiveNextImage
            ImageUrl={previewUrl}
            description="미리보기"
            className="w-[110px] h-[110px] object-contain"
          />
        ) : (
          <div
            className="flex flex-col items-center justify-center pt-5 pb-6
          w-[110px] h-[110px]"
          >
            <AddImageIcon />
            <p className="text-sm text-lightGray-7">{index}/5</p>
          </div>
        )}
        <input
          id={`image-${index}`}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            onFileChange(file);
          }}
        />
      </label>
    </div>
  );
}
