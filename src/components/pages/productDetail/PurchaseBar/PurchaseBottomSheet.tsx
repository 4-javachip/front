'use client';

import {
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import PurchaseBarBottomContent from './PurchaseBarBottomContent';
import { ProductOptionType } from '@/types/ProductResponseDataTypes';
import PurchaseItem from './PurchaseItem';
import { SelectableOptionType } from '@/types/ProductResponseDataTypes';
import { useState } from 'react';
import PurchaseOptionItem from './PurchaseOptionItem';
import AccordionSelector from '@/components/ui/AccordionSelector';

export default function PurchaseBottomSheet({
  isOpen,
  onClickPurchase,
  options,
  sizeData,
  colorData,
}: {
  isOpen: boolean;
  onClickPurchase: () => void;
  options: ProductOptionType[];
  sizeData?: SelectableOptionType[];
  colorData?: SelectableOptionType[];
}) {
  const side = 'bottom';
  const [selectedColorId, setSelectedColorId] = useState<number>();
  const [selectedSizeId, setSelectedSizeId] = useState<number>();

  const handleColorSelect = (colorId: number) => {
    setSelectedColorId(colorId);
    setSelectedSizeId(undefined);
  };

  const handleSizeSelect = (sizeId: number) => {
    setSelectedSizeId(sizeId);
  };

  const availableSizes = sizeData?.filter((size) =>
    options.some(
      (opt) =>
        opt.colorOptionId === selectedColorId && opt.sizeOptionId === size.id
    )
  );

  const selectedOption = options.find(
    (opt) =>
      opt.colorOptionId === selectedColorId &&
      (opt.sizeOptionId === selectedSizeId || opt.sizeOptionId === undefined)
  );

  return (
    <SheetContent
      side={side}
      className="bg-background bottom-0 w-full px-6 
      rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] 
      flex gap-2 items-center max-w-[var(--base-w)] mx-auto"
    >
      <SheetTitle />
      <SheetDescription />
      <div className="w-1/6 h-1 bg-lightGray-10 rounded-full mx-auto mb-7" />

      {/* <ul className="flex flex-col gap-3 mb-6 w-full">
        {options.map((option) => (
          <PurchaseOptionItem
            key={option.productOptionUuid}
            option={option}
            sizeData={sizeData}
            colorData={colorData}
          />
        ))}
      </ul>

      <PurchaseItem /> */}

      <AccordionSelector />

      {/* <ul className="flex flex-col gap-3 mb-6 w-full">
        <li className="flex flex-wrap gap-2">
          {colorData
            ?.filter((color) =>
              options.some((opt) => opt.colorOptionId === color.id)
            )
            .map((color) => (
              <button
                key={color.id}
                className={`px-4 py-2 rounded-full border text-sm ${
                  selectedColorId === color.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-gray-300'
                }`}
                onClick={() => handleColorSelect(color.id)}
              >
                {color.name}
              </button>
            ))}
        </li>

        {selectedColorId !== undefined && availableSizes && (
          <li className="flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <button
                key={size.id}
                className={`px-4 py-2 rounded-full border text-sm ${
                  selectedSizeId === size.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-gray-300'
                }`}
                onClick={() => handleSizeSelect(size.id)}
              >
                {size.name}
              </button>
            ))}
          </li>
        )}
      </ul>

      {selectedOption && <PurchaseItem {...selectedOption} />} */}

      <CommonLayout.FixedButtonBgLayout
        className={`z-[2000] transition-all duration-300 relative
        ${isOpen ? `rounded-none shadow-none px-0` : ``}`}
      >
        <PurchaseBarBottomContent onClickPurchase={onClickPurchase} />
      </CommonLayout.FixedButtonBgLayout>
    </SheetContent>
  );
}
