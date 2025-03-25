import Link from 'next/link';

export default function ItemName({ name }: { name: string }) {
  return (
    <Link href={`product/${name}`} className="cursor-pointer" draggable="false">
      <p className="font-sd-gothic font-medium">{name}</p>
    </Link>
  );
}
