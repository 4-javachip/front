import { cn } from '@/lib/utils';
import React from 'react';

function SectionInnerPadding({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <section className={cn('px-6', className)}>{children}</section>;
}

function SectionNoPadding({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <section className={cn('px-4 py-10', className)}>{children}</section>;
}

function CommonHeader({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <section
      className={cn(
        'fixed top-0 left-0 w-full bg-background z-50 shadow-md h-14',
        className
      )}
    >
      {children}
    </section>
  );
}

export function CommonBorder({ className }: Readonly<{ className?: string }>) {
  return (
    <section
      className={cn(
        'mt-[30px] mb-[20px] border-t border-gray-200 w-full',
        className
      )}
    ></section>
  );
}
export const CommonLayout = {
  CommonBorder,
  SectionInnerPadding,
  SectionNoPadding,
  CommonHeader,
};
