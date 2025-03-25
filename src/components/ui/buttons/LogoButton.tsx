import Link from 'next/link';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';

export default function LogoLink() {
  return (
    <>
      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <LogoIcon />
      </Link>
      <h1 className="blind">Starbucks</h1>
    </>
  );
}
