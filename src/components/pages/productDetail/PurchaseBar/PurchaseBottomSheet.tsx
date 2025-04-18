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
  options,
  sizeData,
  colorData,
  productNameData,
}: {
  isOpen: boolean;
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
  const [totalAmount, setTotalAmount] = useState(0);
  const colorOptionExists = options.some(
    (option) => option.colorOptionId !== null
  );
  const sizeOptionExists = options.some(
    (option) => option.sizeOptionId !== null
  );
  const handleColorSelect = (colorId: number) => {
    setSelectedColorId(colorId);
  };
  const handleSizeSelect = (sizeId: number) => {
    setSelectedSizeId(sizeId);
  };
  const filteredColorData = colorData?.filter((color) =>
    options.some((opt) => opt.colorOptionId === color.id)
  );
  const filteredSizeData = sizeData?.filter((size) =>
    colorOptionExists
      ? options.some(
          (opt) =>
            opt.colorOptionId === selectedColorId &&
            opt.sizeOptionId === size.id
        )
      : options.some((opt) => opt.sizeOptionId === size.id)
  );
  console.log(filteredSizeData);

  const handleRemoveOption = (uuid: string) => {
    setSelectedOption((prev) =>
      prev.filter((opt) => opt.productOptionUuid !== uuid)
    );
  };

  const handleQuantityChange = (
    uuid: string,
    action: 'increase' | 'decrease'
  ) => {
    setSelectedOption((prev) =>
      prev.map((opt) =>
        opt.productOptionUuid === uuid
          ? {
              ...opt,
              quantity:
                action === 'increase'
                  ? opt.quantity + 1
                  : Math.max(opt.quantity - 1, 1),
            }
          : opt
      )
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
  console.log('선택: ', selectedColorId, selectedSizeId, selectedOption);

  useEffect(() => {
    const total = selectedOption.reduce(
      (sum, option) => sum + option.totalPrice,
      0
    );
    setTotalAmount(total);
  }, [selectedOption]);

  useEffect(() => {
    const selectOption = () => {
      const option = options.find((opt) => {
        const matchColor =
          !colorOptionExists || opt.colorOptionId === selectedColorId;
        const matchSize =
          !sizeOptionExists || opt.sizeOptionId === selectedSizeId;
        return matchColor && matchSize;
      });
      console.log('옵션: ', option);

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

  const openAccordionSelector = colorOptionExists
    ? !selectedColorId
      ? '색상'
      : !selectedSizeId
      ? '사이즈'
      : 'undefined'
    : '사이즈';

  return (
    <SheetContent
      side={side}
      className="bg-background bottom-0 w-full
      rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] 
      flex gap-2 items-center max-w-[var(--base-w)] mx-auto"
    >
      <SheetTitle />
      <SheetDescription />
      <div className="padded w-1/6 h-1 bg-lightGray-10 rounded-full mx-auto mb-7" />
      <ul className="padded w-full space-y-4 mb-5">
        {options.length !== 1 && (
          <Accordion
            type="single"
            collapsible
            className="border-2 border-lightGray-8 rounded-md"
            value={openAccordionSelector}
          >
            {colorOptionExists && filteredColorData && (
              <AccordionSelector
                title="색상"
                options={filteredColorData}
                selectedId={selectedColorId}
                onOptionSelect={handleColorSelect}
                isOpen={!selectedColorId ? true : false}
              />
            )}
            {sizeOptionExists && (
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
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </li>
      </ul>
      <hr className="w-full" />
      <CommonLayout.FixedButtonBgLayout
        className={`padded z-[2000] transition-all duration-300 relative
        ${isOpen ? `rounded-none shadow-none px-0` : ``}`}
      >
        <PurchaseBarBottomContent
          onClickPurchase={() => console.log('click2')}
          totalAmount={totalAmount}
        />
      </CommonLayout.FixedButtonBgLayout>
    </SheetContent>
  );
}
