import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import Link from 'next/link';
import CategoryItem from './CategoryItem';
import { useSideBarContext } from '@/context/SideBarContext';

interface Props {
  categories: CategoryMenuType[];
}

export default function MenuCategoryList({ categories }: Props) {
  const { setIsOpen } = useSideBarContext();
  return (
    <section className="px-6 py-7 bg-background">
      <nav className="flex justify-end pb-4.5">
        <Link
          href="/products"
          className="text-xs font-body text-gray-1 flex items-center space-x-1"
          onClick={() => setIsOpen(false)}
        >
          <span>전체 상품 보기</span>
          <RightArrowIcon />
        </Link>
      </nav>

      <ul
        id="menu-category-list-title"
        className="grid grid-cols-3 gap-x-5.1 gap-y-5 place-items-center"
      >
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryItem category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
}
