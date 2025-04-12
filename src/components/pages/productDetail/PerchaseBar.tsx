'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';
import PerchaseBottomSheet from './PerchaseBottomSheet';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
              구매하기sd
            </CommonButton>
          )}
        </CommonLayout.FixedButtonBgLayout>

        <SheetContent
          side={side}
          className="bg-background bottom-[86px] w-full pt-3.5 px-6 pb-7 
          rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] 
          flex gap-2 items-center max-w-[var(--base-w)] mx-auto"
        >
          <SheetTitle>aaa</SheetTitle>
          <SheetDescription>aaa</SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
}
