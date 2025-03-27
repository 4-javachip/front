import MenuTop from './MenuTop';
import MenuBannerList from './MenuBannerList';
import MenuCategoryList from './MenuCategoryList';
import { CategoryMenuType } from '@/types/ResponseDataTypes';

interface Props {
  categories: CategoryMenuType[];
  onClose: () => void;
  isOpen: boolean;
}

export default function MenuModal({ categories, onClose, isOpen }: Props) {
  if (!isOpen) return null;

  return (
    <aside className="fixed inset-0 z-60 w-full h-full bg-white shadow-lg overflow-y-auto">
      <div className="w-full h-full">
        <MenuTop onClose={onClose} />
        <MenuCategoryList categories={categories} onClose={onClose} />
        <MenuBannerList onClose={onClose} />
      </div>
    </aside>
  );
}
