import ChevronRightIcon from '@/components/ui/icons/ChevronRightIcon';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  categories: CategoryMenuType[];
}

export default function CategoryMenuList({ categories }: Props) {
  return (
    <div className="p-[24px]">
      {/* 상단 전체 상품 보기 영역 */}
      <div className="flex justify-end pb-[17px] ">
        <Link
          href="/products"
          className="text-sm md:text-base font-inter text-[#2D2D2D] text-[12px] flex items-center space-x-1"
        >
          <span>전체 상품 보기</span>
          <ChevronRightIcon />
        </Link>
      </div>

      {/* 카테고리 리스트 */}
      <div className="grid grid-cols-3 gap-x-[21px] gap-y-[20px] place-items-center">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-md">
              <Image
                src={category.thumbnail.imageUrl}
                alt={category.thumbnail.description}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm md:text-base mt-[10px] font-inter font-medium text-[14px] text-black">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
