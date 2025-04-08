import { ProductThumbnailDataType } from '@/types/ProductResponseDataTypes';
import Image from 'next/image';

export default function ProductImg({
  thumbnailUrl,
  description,
  defaulted,
}: ProductThumbnailDataType) {
  return (
    <figure className="w-full relative pb-[100%]">
      <Image
        src={thumbnailUrl}
        alt={description}
        fill
        priority={true}
        className="object-cover absolute top-0 left-0 w-full h-full"
      />
    </figure>
  );
}
