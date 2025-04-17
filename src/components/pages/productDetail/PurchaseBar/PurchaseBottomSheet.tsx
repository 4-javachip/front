'use client';

import {
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import PurchaseBarBottomContent from './PurchaseBarBottomContent';
import {
  ProductNameDataType,
  ProductOptionType,
} from '@/types/ProductResponseDataTypes';
import PurchaseItem from './PurchaseItem';
import { SelectableOptionType } from '@/types/ProductResponseDataTypes';
import { useEffect, useState } from 'react';
import AccordionSelector from '@/components/ui/accordions/AccordionSelector';
import { Accordion } from '@/components/ui/accordions/accordion';
import { SelectedOptionWithNames } from '@/types/storeDataTypes';

export default function PurchaseBottomSheet({
  isOpen,
  onClickPurchase,
  options,
  sizeData,
  colorData,
  productNameData,
}: {
  isOpen: boolean;
  onClickPurchase: () => void;
  options: ProductOptionType[];
  sizeData?: SelectableOptionType[];
  colorData?: SelectableOptionType[];
  productNameData: ProductNameDataType;
}) {
  const side = 'bottom';
  const [selectedColorId, setSelectedColorId] = useState<number>();
  const [selectedSizeId, setSelectedSizeId] = useState<number>();
  const [selectedOption, setSelectedOption] = useState<
    SelectedOptionWithNames[]
  >([]);

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

  const filteredColorData = colorData?.filter((color) =>
    options.some((opt) => opt.colorOptionId === color.id)
  );

  const handleRemoveOption = (uuid: string) => {
    setSelectedOption((prev) =>
      prev.filter((opt) => opt.productOptionUuid !== uuid)
    );
  };

  useEffect(() => {
    if (options.length === 1) {
      const opt = options[0];
      setSelectedOption([
        {
          ...opt,
          quantity: 1,
        },
      ]);
    }
  }, [options]);

  useEffect(() => {
    const selectOption = () => {
      const option = options.find(
        (opt) =>
          opt.colorOptionId === selectedColorId &&
          (opt.sizeOptionId === selectedSizeId ||
            opt.sizeOptionId === undefined)
      );
      if (option) {
        const colorName = colorData?.find(
          (c) => c.id === selectedColorId
        )?.name;
        const sizeName = sizeData?.find((s) => s.id === selectedSizeId)?.name;
        setSelectedOption((prev) => {
          const existingIndex = prev.findIndex(
            (opt) => opt.productOptionUuid === option.productOptionUuid
          );
          if (existingIndex !== -1) {
            const updated = [...prev];
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + 1,
            };
            return updated;
          }
          const enrichedOption: SelectedOptionWithNames = {
            ...option,
            colorName,
            sizeName,
            quantity: 1,
          };
          return [...prev, enrichedOption];
        });
        setSelectedSizeId(undefined);
        setSelectedColorId(undefined);
      }
    };
    selectOption();
    console.log('Selected:', {
      option: selectedOption,
      colorId: selectedColorId,
      sizeId: selectedSizeId,
    });
  }, [selectedColorId, selectedSizeId, options]);

  const openAccordionSelector = !selectedColorId
    ? '색상'
    : selectedColorId && !selectedSizeId
    ? '사이즈'
    : undefined;

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
        {options.length !== 1 && (
          <Accordion
            type="single"
            collapsible
            className="border-2 border-lightGray-8 rounded-md"
            value={openAccordionSelector}
          >
            {filteredColorData && (
              <AccordionSelector
                title="색상"
                options={filteredColorData}
                selectedId={selectedColorId}
                onOptionSelect={handleColorSelect}
                isOpen={!selectedColorId ? true : false}
              />
            )}
            {filteredSizeData && (
              <AccordionSelector
                title="사이즈"
                options={filteredSizeData}
                selectedId={selectedSizeId}
                onOptionSelect={handleSizeSelect}
                isOpen={selectedColorId && !selectedSizeId ? true : false}
              />
            )}
          </Accordion>
        )}

        <li className="my-5 space-y-2">
          {selectedOption.map((option) => (
            <PurchaseItem
              key={option.productOptionUuid}
              option={option}
              onRemove={handleRemoveOption}
              productNameData={productNameData}
            />
          ))}
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
