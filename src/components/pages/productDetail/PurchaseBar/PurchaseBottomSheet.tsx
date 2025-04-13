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
  const [selectedOption, setSelectedOption] = useState<ProductOptionType[]>();

  return (
    <SheetContent
      side={side}
      className="bg-background bottom-0 w-full px-6 
      rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] 
      flex gap-2 items-center max-w-[var(--base-w)] mx-auto"
    >
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
      <div className="w-1/6 h-1 bg-lightGray-10 rounded-full mx-auto mb-7" />

      <ul className="flex flex-col gap-3 mb-6 w-full">
        {options.map((option) => (
          <PurchaseOptionItem
            key={option.productOptionUuid}
            option={option}
            sizeData={sizeData}
            colorData={colorData}
          />
        ))}
      </ul>

      <PurchaseItem />

      <CommonLayout.FixedButtonBgLayout
        className={`z-[2000] transition-all duration-300 relative
        ${isOpen ? `rounded-none shadow-none px-0` : ``}`}
      >
        <PurchaseBarBottomContent onClickPurchase={onClickPurchase} />
      </CommonLayout.FixedButtonBgLayout>
    </SheetContent>
  );
}
