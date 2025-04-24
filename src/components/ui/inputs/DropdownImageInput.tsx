'use client';

import Image from 'next/image';
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
        className="flex flex-col items-center justify-center 
          border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
          bg-gray-50 hover:bg-gray-100
          transition-colors duration-100 ease-in-out
          w-[110px] h-[110px]
          overflow-hidden"
      >
        {previewUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={previewUrl}
              alt="이미지 미리보기"
              fill
              className="object-cover pointer-events-none select-none"
              priority
              sizes="110px"
            />
          </div>
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
          name={`image-${index}`}
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
