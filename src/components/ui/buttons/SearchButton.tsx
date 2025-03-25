import Link from 'next/link';
import SearchIcon from '@/components/ui/icons/SearchIcon';

export default function SearchButton() {
  return (
    <Link href="/search" aria-label="검색 페이지 이동">
      <SearchIcon />
    </Link>
  );
}
