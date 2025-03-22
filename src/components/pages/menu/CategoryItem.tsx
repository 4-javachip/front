import { CategoryMenuType } from '@/types/ResponseDataTypes';
import Image from 'next/image';

interface Props {
  category: CategoryMenuType;
}

export default function CategoryItem({ category }: Props) {
  return (
    <div className="flex flex-col items-center">
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
  );
}
