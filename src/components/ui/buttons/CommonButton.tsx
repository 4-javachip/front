import { cn } from '@/lib/utils';

export default function CommonButton({
  children,
  className,
  onClick,
  isEnabled,
  type,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  isEnabled: boolean;
  type?: 'button' | 'submit' | 'reset';
}>) {
  return (
    <button
      className={cn(
        'text-background rounded-[3.125rem] py-3 w-full font-body text-sm',
        isEnabled ? 'bg-green cursor-pointer' : 'bg-lightGray-4',
        className
      )}
      onClick={isEnabled ? onClick : undefined}
      type={type ?? 'button'}
    >
      {children}
    </button>
  );
}
