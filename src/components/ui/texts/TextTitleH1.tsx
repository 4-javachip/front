import { cn } from '@/lib/utils';
import React from 'react';

export default function TextTitleH1({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        'py-[1.25rem] text-lg font-semibold font-pretendard',
        className
      )}
    >
      {children}
    </h1>
  );
}
