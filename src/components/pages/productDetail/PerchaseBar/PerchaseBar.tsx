'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';
import PerchaseBottomSheet from './PerchaseBottomSheet';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import PerchaseBarBottomContent from './PerchaseBarBottomContent';
import {
  ProductOptionType,
  SelectableOptionType,
} from '@/types/ProductResponseDataTypes';
import { getSelectableOptionListData } from '@/actions/product-service';

const side = 'bottom';

export default function PerchaseBar({
  options,
}: {
  options: ProductOptionType[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeData, setSizeData] = useState<SelectableOptionType[]>();
  const [colorData, setColorData] = useState<SelectableOptionType[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sizeList, colorList] = await Promise.all([
          getSelectableOptionListData('size'),
          getSelectableOptionListData('color'),
        ]);
        setSizeData(sizeList);
        setColorData(colorList);
      } catch (e) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <Sheet key={side} open={isOpen} onOpenChange={setIsOpen}>
        <CommonLayout.FixedButtonBgLayout
          className={`z-[1000] transition-all duration-300
          ${
            isOpen ? `rounded-none shadow-none border-t border-lightGray-5` : ``
          }`}
        >
          {!isOpen ? (
            <>
              <CartIcon />
              <SheetTrigger asChild>
                <CommonButton className="font-semibold" isEnabled={true}>
                  구매하기
                </CommonButton>
              </SheetTrigger>
            </>
          ) : (
            <PerchaseBarBottomContent onClickPurchase={() => {}} />
          )}
        </CommonLayout.FixedButtonBgLayout>

        <PerchaseBottomSheet
          isOpen={isOpen}
          onClickPurchase={() => console.log('click')}
          options={options}
          sizeData={sizeData}
          colorData={colorData}
        />
      </Sheet>
    </>
  );
}
