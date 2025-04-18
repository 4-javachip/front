import { useModalContext } from '@/context/SideBarContext';
import React from 'react';
import CloseIcon from '../ui/icons/CloseIcon';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useModalContext();
  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed top-0
    z-[3000] w-full h-full bg-background
    max-w-[var(--base-w)]"
    >
      <button
        className="inline-flex items-center cursor-pointer"
        onClick={() => setIsSearchOpen(false)}
      >
        <CloseIcon />
      </button>
      SearchModal
    </div>
  );
}
