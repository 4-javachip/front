import Link from 'next/link';
import SearchIcon from '@/components/ui/icons/SearchIcon';

export default function SearchButton() {
  return (
    <Link href="/search">
      <SearchIcon />
    </Link>
  );
}
