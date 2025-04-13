'use client';

import {
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import PerchaseBarBottomContent from './PerchaseBarBottomContent';
import { ProductOptionType } from '@/types/ProductResponseDataTypes';
import PerchaseItem from './PerchaseItem';
import { SelectableOptionType } from '@/types/ProductResponseDataTypes';

export default function PerchaseBottomSheet({
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

      <div className="flex flex-col gap-3 mb-6 w-full">
        {options.map((option) => (
          <div
            key={option.productOptionUuid}
            className="flex justify-between items-center border rounded-xl px-4 py-3"
          >
            <div className="flex gap-4 items-center text-sm">
              {option.colorOptionId !== null && colorData && (
                <span>
                  컬러{' '}
                  {colorData.find((c) => c.id === option.colorOptionId)?.name}
                </span>
              )}
              {option.sizeOptionId !== null && sizeData && (
                <span>
                  사이즈{' '}
                  {sizeData.find((s) => s.id === option.sizeOptionId)?.name}
                </span>
              )}
            </div>

            <div className="text-base font-semibold font-sd-gothic">
              {option.totalPrice.toLocaleString()}원
            </div>
          </div>
        ))}
      </div>

      <PerchaseItem />

      <CommonLayout.FixedButtonBgLayout
        className={`z-[2000] transition-all duration-300 relative
        ${isOpen ? `rounded-none shadow-none px-0` : ``}`}
      >
        <PerchaseBarBottomContent onClickPurchase={onClickPurchase} />
      </CommonLayout.FixedButtonBgLayout>
    </SheetContent>
  );
}
