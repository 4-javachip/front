import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import { ProductItemType } from '@/types/ResponseDataTypes';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCarouselItem({
  id,
  thumbnail,
  label,
  name,
  price,
  salePrice,
  discountRate,
  size = 140,
}: ProductItemType & { size?: number }) {
  return (
    <div className="flex flex-col gap-3 mb-[30px]" style={{ width: size }}>
      {/* 썸네일 */}
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
      <div className="flex flex-col gap-2">
        <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} />
        {/* 상품명 */}
        <Link
          href={`product/${id}`}
          className="cursor-pointer"
          draggable="false"
        >
          <p className="font-sd-gothic font-medium">{name}</p>
        </Link>
      </div>
      {/* 가격 */}
      <div className="relative">
        {salePrice && discountRate != 0 ? (
          <>
            <p className="font-sd-gothic text-lightGray-6 line-through">
              {price.toLocaleString()}원
            </p>
            <p className="font-sd-gothic font-bold">
              {salePrice.toLocaleString()}원
            </p>
            {/* 할인률 */}
            <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
              {discountRate}%
            </p>
          </>
        ) : (
          <>
            <p className="font-sd-gothic font-bold">
              {price.toLocaleString()}원
            </p>
          </>
        )}
      </div>
    </div>
  );
}
