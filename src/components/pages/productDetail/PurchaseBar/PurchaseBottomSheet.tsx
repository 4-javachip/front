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
  const colorOptionExists = options.some(
    (option) => option.colorOptionId !== null
  );
  const sizeOptionExists = options.some(
    (option) => option.sizeOptionId !== null
  );

  console.log('컬러', colorOptionExists, '사이즈', sizeOptionExists);
  const handleColorSelect = (colorId: number) => {
    setSelectedColorId(colorId);
    if (filteredSizeData?.length === 0) selectOption();
    else setSelectedSizeId(undefined);
  };

  const handleSizeSelect = (sizeId: number) => {
    setSelectedSizeId(sizeId);
    selectOption();
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
  console.log('size: ', filteredSizeData);
  console.log('color: ', filteredColorData);

  const handleRemoveOption = (uuid: string) => {
    setSelectedOption((prev) =>
      prev.filter((opt) => opt.productOptionUuid !== uuid)
    );
  };

  const selectOption = () => {
    const option = options.find((opt) => {
      const matchColor =
        filteredColorData?.length === 0 ||
        opt.colorOptionId === selectedColorId;
      const matchSize =
        filteredSizeData?.length === 0 || opt.sizeOptionId === selectedSizeId;
      return matchColor && matchSize;
    });

    if (!option) return;

    const colorName = colorData?.find((c) => c.id === selectedColorId)?.name;
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

    setSelectedColorId(undefined);
    setSelectedSizeId(undefined);
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

  // const openAccordionSelector = !selectedColorId
  //   ? '색상'
  //   : selectedColorId && !selectedSizeId
  //   ? '사이즈'
  //   : undefined;

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
      <ul className="w-full space-y-4 mb-5">
        {options.length !== 1 && (
          <Accordion
            type="single"
            collapsible
            className="border-2 border-lightGray-8 rounded-md"
            // value={openAccordionSelector}
          >
            {filteredColorData && filteredColorData?.length !== 0 && (
              <AccordionSelector
                title="색상"
                options={filteredColorData}
                selectedId={selectedColorId}
                onOptionSelect={handleColorSelect}
                isOpen={!selectedColorId ? true : false}
              />
            )}
            {filteredSizeData && filteredSizeData?.length !== 0 && (
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

        <li className="space-y-2">
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
