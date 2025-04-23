'use client';
import { getAllCategories } from '@/actions/category-service';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import { useModalContext } from '@/context/SideBarContext';

// interface Props {
//   onClick: () => void;
// }

export default function MenuButton() {
  const { setIsOpen } = useModalContext();
  return (
    <button onClick={() => setIsOpen(true)} className="cursor-pointer">
      <MenuIcon />
    </button>
  );
}
