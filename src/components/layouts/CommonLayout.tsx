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

function FixedButtonBgLayout({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <section
      className={cn(
        'fixed bg-background bottom-0 w-full pt-3.5 px-6 pb-7 rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] flex flex-row gap-2 items-center',
        className
      )}
    >
      {children}
    </section>
  );
}

export const CommonLayout = {
  SectionInnerPadding,
  SectionNoPadding,
  CommonHeader,
  FixedButtonBgLayout,
};
