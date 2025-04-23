'use client';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import { useModalContext } from '@/context/SideBarContext';

export default function SearchButton() {
  const { setIsSearchOpen } = useModalContext();
  return (
    <button onClick={() => setIsSearchOpen(true)} className="cursor-pointer">
      <SearchIcon />
    </button>
  );
}
