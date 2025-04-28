'use client';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import { useModalContext } from '@/context/SideBarContext';

export default function MenuButton() {
  const { setIsOpen } = useModalContext();
  return (
    <button onClick={() => setIsOpen(true)} className="cursor-pointer">
      <MenuIcon />
    </button>
  );
}
