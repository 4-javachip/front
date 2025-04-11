'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'w-12 h-[1.8125rem] peer data-[state=checked]:bg-green data-[state=unchecked]:bg-lightGray-7 focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-green inline-flex  shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          ' bg-background dark:data-[state=unchecked]:bg-lightGray-4 dark:data-[state=checked]:bg-green pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 w-[1.59375rem] h-[1.59375rem]'
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
