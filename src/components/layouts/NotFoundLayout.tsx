import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NotFoundLayout({
  message,
  linkText,
  linkHref,
  className,
}: {
  message: string;
  linkText: string;
  linkHref: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'font-sd-gothic text-lightGray-6 text-center py-64',
        className
      )}
    >
      <p className="pb-1">{message}</p>
      <Link href={linkHref} className="underline">
        {linkText}
      </Link>
    </section>
  );
}
