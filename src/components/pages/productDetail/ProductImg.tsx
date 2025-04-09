import BannerSlide from '@/components/ui/BannerSlide';
import { ProductThumbnailDataType } from '@/types/ProductResponseDataTypes';
import { BannerSlideImageType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import { useMemo } from 'react';

export default function ProductImg({
  thumbnails,
}: {
  thumbnails: ProductThumbnailDataType[];
}) {
  const slides: BannerSlideImageType[] = useMemo(
    () =>
      thumbnails.map((thumb) => ({
        id: thumb.id,
        imageUrl: thumb.thumbnailUrl,
        description: thumb.description,
        defaulted: thumb.defaulted,
      })),
    [thumbnails]
  );

  return (
    <figure>
      {/* <Image
        src={thumbnailUrl}
        alt={description}
        fill
        priority={true}
        className="object-cover absolute top-0 left-0 w-full h-full"
      /> */}
      {slides.length > 0 && <BannerSlide slides={slides} autoSlide={false} />}
    </figure>
  );
}
