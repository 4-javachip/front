'use client';

import { CommonLayout } from '@/components/layouts/CommonLayout';
import { Button } from '@/components/ui/button';
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

const side = 'bottom';

export default function PerchaseBottomSheet() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key={side}>
        <SheetTrigger asChild>
          <Button variant="outline">{side}</Button>
        </SheetTrigger>

        <SheetContent
          side={side}
          className="fixed bg-background bottom-0 w-full pt-3.5 px-6 pb-7 
          rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] 
          flex flex-row gap-2 items-center max-w-[var(--base-w)] mx-auto"
        >
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">adas</div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
