import { cn } from '@/lib/utils';

export default function AuthHeading({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h2 className={cn('font-body font-semibold text-2xl', className)}>
      {children}
    </h2>
  );
}
