import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import Link from 'next/link';
import CategoryItem from './CategoryItem';
interface Props {
  categories: CategoryMenuType[];
}

export default function MenuCategoryList({ categories }: Props) {
  return (
    <div className="p-[24px]">
      <div className="flex justify-end pb-[17px] ">
        <Link
          href="/products"
          className="text-sm md:text-base font-inter text-[#2D2D2D] text-[12px] flex items-center space-x-1"
        >
          <span>전체 상품 보기</span>
          <RightArrowIcon />
        </Link>
      </div>

      {/* 카테고리 리스트 */}
      <div className="grid grid-cols-3 gap-x-[21px] gap-y-[20px] place-items-center">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
