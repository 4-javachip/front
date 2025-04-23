'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import PurchaseBottomSheet from './PurchaseBottomSheet';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import PurchaseBarBottomContent from './PurchaseBarBottomContent';
import {
  ProductNameDataType,
  ProductOptionType,
  SelectableOptionType,
} from '@/types/ProductResponseDataTypes';
import { getSelectableOptionListData } from '@/actions/product-service';
import AlertModal from '@/components/ui/dialogs/AlertModal';
import { useRouter } from 'next/navigation';

const side = 'bottom';

export default function PurchaseBar({
  options,
  productNameData,
}: {
  options: ProductOptionType[];
  productNameData: ProductNameDataType;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [sizeData, setSizeData] = useState<SelectableOptionType[]>();
  const [colorData, setColorData] = useState<SelectableOptionType[]>();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  const handleError = (message: string) => {
    setModalErrorMessage(message);
    setErrorModalOpen(true);
  };

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
      <AlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        errorMessage={modalErrorMessage}
        isOverLayHidden={true}
      />
      <Sheet
        key={side}
        open={isOpen}
        onOpenChange={(open) => setIsOpen(errorModalOpen ? true : open)}
      >
        <CommonLayout.FixedButtonBgLayout
          className={`z-[1000] transition-all duration-300
          ${
            isOpen
              ? `rounded-none shadow-none 
            pointer-events-none`
              : ``
          }`}
        >
          {!isOpen ? (
            <SheetTrigger asChild>
              <CommonButton className="font-semibold" isEnabled={true}>
                장바구니에 담기
              </CommonButton>
            </SheetTrigger>
          ) : (
            <PurchaseBarBottomContent className="hidden" />
          )}
        </CommonLayout.FixedButtonBgLayout>

        <PurchaseBottomSheet
          isOpen={isOpen}
          options={options}
          sizeData={sizeData}
          colorData={colorData}
          productNameData={productNameData}
          handleError={handleError}
        />
      </Sheet>
    </>
  );
}
