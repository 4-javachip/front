import MenuTop from './MenuTop';
import MenuBannerList from './MenuBannerList';
import MenuCategoryList from './MenuCategoryList';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { useSidebarContext } from '@/context/SideBarContext';
import { cn } from '@/lib/utils';

interface Props {
  categories: CategoryMenuType[];
}

export default function MenuSideBar({ categories }: Props) {
  const { isOpen } = useSidebarContext();
  if (!isOpen) return null;

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-[3000] size-full transition-all overflow-hidden',
        'flex flex-col justify-between items-start',
        isOpen ? 'translate-x' : '-translate-x-full',
        '  bg-background '
      )}
    >
      <div className="w-full h-full ">
        <MenuTop />
        <MenuCategoryList categories={categories} />
        <MenuBannerList />
      </div>
    </aside>
  );
}
