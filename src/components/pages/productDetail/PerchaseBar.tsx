'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';
import PerchaseBottomSheet from './PerchaseBottomSheet';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import QuantityControl from '../cart/QuantityControl';

const side = 'bottom';

export default function PerchaseBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sheet key={side} open={isOpen} onOpenChange={setIsOpen}>
        <CommonLayout.FixedButtonBgLayout
          className={`z-[1000] transition-all duration-300
          ${isOpen ? `rounded-none shadow-none` : ``}`}
        >
          <CartIcon />
          {!isOpen ? (
            <SheetTrigger asChild>
              <CommonButton className="font-semibold" isEnabled={true}>
                구매하기
              </CommonButton>
            </SheetTrigger>
          ) : (
            <CommonButton className="font-semibold" isEnabled={true}>
              구매하기
            </CommonButton>
          )}
        </CommonLayout.FixedButtonBgLayout>

        <SheetContent
          side={side}
          className="bg-background bottom-0 w-full px-6 
          rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] 
          flex gap-2 items-center max-w-[var(--base-w)] mx-auto"
        >
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="w-1/6 h-1 bg-lightGray-10 rounded-full mx-auto mb-7" />

          <div className="w-full padded py-5 bg-lightGray-2">
            <p className="text-lightGray-1 text-sm">
              SS 시그니처 나수 텀블러 355ml
            </p>
            <div className="flex flex-row justify-between pt-4">
              <QuantityControl
                quantity={1}
                onDecrease={() => {}}
                onIncrease={() => {}}
              />
              <p className="font-bold font-sd-gothic">34,000원</p>
            </div>
          </div>

          <CommonLayout.FixedButtonBgLayout
            className={`z-[2000] transition-all duration-300 relative
            ${isOpen ? `rounded-none shadow-none` : ``}`}
          >
            <CommonButton
              className="font-semibold"
              isEnabled={true}
              onClick={() => console.log('click')}
            >
              구매하기 영역
            </CommonButton>
          </CommonLayout.FixedButtonBgLayout>
        </SheetContent>
      </Sheet>
    </>
  );
}
