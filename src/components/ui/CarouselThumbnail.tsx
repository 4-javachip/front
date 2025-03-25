import { ImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function CarouselThumbnail({
  id,
  thumbnail,
  size,
}: {
  id: number;
  thumbnail: ImageType;
  size: number;
}) {
  return (
    <Link
      href={`product/${id}`}
      className="relative bg-lightGray-4 rounded-sm
    cursor-pointer"
      style={{ width: size, height: size }}
      draggable="false"
    >
      <Image
        src={thumbnail.imageUrl}
        alt={thumbnail.description}
        fill
        className="rounded-sm object-cover select-none pointer-events-none"
      />
    </Link>
  );
}
