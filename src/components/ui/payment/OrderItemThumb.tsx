import Image from 'next/image';
import Link from 'next/link';

export default function OrderItemThumb({
  description,
  thumbnailurl,
  size,
}: {
  thumbnailurl: string;
  description: string;
  size: number;
}) {
  const style =
    size === 140
      ? { width: size, height: size }
      : { width: '100%', aspectRatio: '1 / 1' };

  return (
    <Link
      href={`product/`}
      className="relative bg-lightGray-4 rounded-sm
    cursor-pointer"
      style={style}
      draggable="false"
    >
      <Image
        src={thumbnailurl}
        alt={description}
        fill
        sizes={size === 140 ? '140px' : '100%'}
        className="rounded-sm object-cover select-none pointer-events-none"
        loading="lazy"
      />
    </Link>
  );
}
