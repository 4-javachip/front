import { ImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';

export default function ProductImg({ imageUrl, description }: ImageType) {
  return (
    <figure className="w-full relative" style={{ paddingBottom: '100%' }}>
      <Image
        src={imageUrl}
        alt={description}
        fill
        priority
        className="object-cover absolute top-0 left-0 w-full h-full"
      />
    </figure>
  );
}
