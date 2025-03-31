import { CategoryMenuType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  category: CategoryMenuType;
  onClose: () => void;
}

export default function CategoryItem({ category, onClose }: Props) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      onClick={onClose}
      className="flex flex-col items-center"
    >
      <figure className="w-25 h-25 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-md">
        <Image
          src={category.thumbnail.imageUrl}
          alt={category.thumbnail.description}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </figure>

      <figcaption className="text-sm  mt-[10px] font-body font-medium text-[14px] text-black">
        {category.name}
      </figcaption>
    </Link>
  );
}
