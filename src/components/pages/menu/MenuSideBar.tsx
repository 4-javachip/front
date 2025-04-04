import MenuTop from './MenuTop';
import MenuBannerList from './MenuBannerList';
import MenuCategoryList from './MenuCategoryList';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { useSideBarContext } from '@/context/SideBarContext';
import { cn } from '@/lib/utils';

interface Props {
  categories: CategoryMenuType[];
}

export default function MenuSideBar({ categories }: Props) {
  const { isOpen } = useSideBarContext();

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-[3000] w-full h-full',
        'bg-background backdrop-filter backdrop-blur-xl backdrop-opacity-90',
        'transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
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
