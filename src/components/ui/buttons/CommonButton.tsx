import { cn } from '@/lib/utils';

export default function CommonButton({
  children,
  className,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}>) {
  return (
    <button
      className={cn(
        'bg-green text-background rounded-[3.125rem] py-3 w-full font-body text-sm cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
