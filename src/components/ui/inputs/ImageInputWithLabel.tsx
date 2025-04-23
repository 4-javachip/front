'use client';

import { useState } from 'react';
import { CommonResposiveNextImage } from '../CommonResponsiveNextImage';

export default function InputWithLabel({
  label,
  id,
  ...props
}: {
  label?: string;
  id: string;
} & React.ComponentProps<'input'>) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <div>
      {label && (
        <p className="block mb-1 font-semibold font-sd-gothic">{label}</p>
      )}

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full h-64 
          border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
          bg-gray-50 hover:bg-gray-100
          transition-colors duration-100 ease-in-out
          overflow-hidden"
        >
          {previewUrl ? (
            <CommonResposiveNextImage
              ImageUrl={previewUrl}
              description="미리보기"
              className="w-full max-h-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-image-plus-icon lucide-image-plus"
              >
                <path d="M16 5h6" />
                <path d="M19 2v6" />
                <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                <circle cx="9" cy="9" r="2" />
              </svg>
              <p className="mt-2 text-sm text-gray-500">
                이미지를 업로드하세요
              </p>
            </div>
          )}
          <input
            id={id}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setPreviewUrl(URL.createObjectURL(file));
              }
            }}
            {...props}
          />
        </label>
      </div>
    </div>
  );
}
