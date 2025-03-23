import { ImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';

export default function ProductImg({ imageUrl, description }: ImageType) {
  return (
    <div className="w-full h-[390px] flex-shrink-0 relative">
      <Image
        src={imageUrl}
        alt={description}
        fill
        className="object-cover w-full h-full"
      />
    </div>
  );
}
