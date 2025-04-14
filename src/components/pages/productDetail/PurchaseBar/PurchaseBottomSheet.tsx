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
import { useEffect, useState } from 'react';
import PurchaseOptionItem from './PurchaseOptionItem';
import AccordionSelector from '@/components/ui/AccordionSelector';
import { Accordion } from '@/components/ui/accordion';

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
  const [selectedOption, setSelectedOption] = useState<ProductOptionType>();

  const handleColorSelect = (colorId: number) => {
    setSelectedColorId(colorId);
    setSelectedSizeId(undefined);
  };

  const handleSizeSelect = (sizeId: number) => {
    setSelectedSizeId(sizeId);
  };

  const filteredSizeData = sizeData?.filter((size) =>
    options.some(
      (opt) =>
        opt.colorOptionId === selectedColorId && opt.sizeOptionId === size.id
    )
  );

  useEffect(() => {
    const selectOption = () => {
      const option = options.find(
        (opt) =>
          opt.colorOptionId === selectedColorId &&
          (opt.sizeOptionId === selectedSizeId ||
            opt.sizeOptionId === undefined)
      );
      if (option) setSelectedOption(option);
    };

    selectOption();
    console.log('Selected:', {
      option: selectedOption,
      colorId: selectedColorId,
      sizeId: selectedSizeId,
    });
  }, [selectedColorId, selectedSizeId, options]);

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
      <ul className="w-full space-y-4">
        <Accordion
          type="single"
          collapsible
          className="w-full border-2 border-lightGray-8 rounded-md"
        >
          {colorData && (
            <AccordionSelector
              title="색상"
              options={colorData}
              selectedId={selectedColorId}
              onOptionSelect={handleColorSelect}
              isOpen={!selectedColorId ? true : false}
            />
          )}
          {filteredSizeData && selectedColorId && (
            <AccordionSelector
              title="사이즈"
              options={filteredSizeData}
              selectedId={selectedSizeId}
              onOptionSelect={handleSizeSelect}
              isOpen={selectedColorId && !selectedSizeId ? true : false}
            />
          )}
        </Accordion>

        <li className="my-5">
          {selectedOption && <PurchaseItem {...selectedOption} />}
        </li>
      </ul>

      <CommonLayout.FixedButtonBgLayout
        className={`z-[2000] transition-all duration-300 relative
        ${isOpen ? `rounded-none shadow-none px-0` : ``}`}
      >
        <PurchaseBarBottomContent onClickPurchase={onClickPurchase} />
      </CommonLayout.FixedButtonBgLayout>
    </SheetContent>
  );
}
