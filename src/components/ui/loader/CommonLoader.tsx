import { cn } from '@/lib/utils';
import Loader from '../loader';

export function CommonLoader({
  className,
  size = '10',
}: {
  className?: string;
  size?: string;
}) {
  return (
    <section
      className={cn(
        'h-80 pt-4 w-full flex justify-center items-center',
        className
      )}
    >
      <Loader size={size} />
    </section>
  );
}
