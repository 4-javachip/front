import { getDefaultThumbnailDataByProductUuid } from '@/actions/product-service';
import { ProductThumbnailDataType } from '@/types/ProductResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loader from '../loader';

export default function CartThumbnail({
  productUuid,
  size,
}: {
  productUuid: string;
  size: number;
}) {
  const style =
    size === 140
      ? { width: size, height: size }
      : { width: '100%', aspectRatio: '1 / 1' };

  const [thumbnail, setThumbnail] = useState<ProductThumbnailDataType>();

  useEffect(() => {
    const fetchThumbnail = async () => {
      const res = await getDefaultThumbnailDataByProductUuid(productUuid);
      setThumbnail(res);
    };

    fetchThumbnail();
  }, [productUuid]);

  return (
    <>
      {thumbnail ? (
        <Link
          href={`product/${thumbnail.productUuid}`}
          target="_blank"
          className="relative bg-lightGray-4 rounded-sm
    cursor-pointer"
          style={style}
          draggable="false"
        >
          <Image
            src={thumbnail.thumbnailUrl}
            alt={thumbnail.description}
            width={size}
            height={size}
            sizes={size === 140 ? '140px' : '100%'}
            className="rounded-sm object-cover select-none pointer-events-none"
            // loading="lazy"
          />
        </Link>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Loader size={'10'} />
        </div>
      )}
    </>
  );
}
