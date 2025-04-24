import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function SubmitButton({
  children,
  className,
  onClick,
  isEnabled,
  type,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isEnabled: boolean;
  type?: 'submit';
}>) {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };
  return (
    <button
      className={cn(
        'text-background rounded-[3.125rem] py-3 w-full font-body text-sm',
        isEnabled ? 'bg-green cursor-pointer' : 'bg-lightGray-4',
        className
      )}
      disabled={!isEnabled}
      onClick={onClick}
      type={type ?? 'button'}
    >
      {children}
    </button>
  );
}
